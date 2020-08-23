import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { getOffset } from '../../utils/offset';
import { scrollIntoView } from '../../utils/scroll';
import { focusVisible } from '../../utils/focus-visible';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  tag: 'a-tab-group',
  styleUrl: 'tab-group.scss',
  scoped: true,
})
export class TabGroup {
  /**
   * 1. Own Properties
   */

  activeTab: HTMLElement;
  activeTabIndicator: HTMLElement;
  body: HTMLElement;
  mutationObserver: MutationObserver;
  nav: HTMLElement;
  resizeObserver: any;
  tabGroup: HTMLElement;
  tabs: HTMLElement;

  /**
   * 2. Reference to host HTML element.
   */

  @Element() host: HTMLElement;

  /**
   * 3. State() variables
   */

  @State() canScrollHorizontally = false;

  /**
   * 4. Public Property API
   */

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** The placement of the tabs. */
  @Prop() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';

  @Watch('placement')
  handlePlacementChange() {
    this.syncActiveTabIndicator();
  }

  /**
   * 5. Events section
   */

  /** Emitted when a tab is shown. */
  @Event() slTabShow: EventEmitter;

  /** Emitted when a tab is hidden. */
  @Event() slTabHide: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
    this.handleScrollRight = this.handleScrollRight.bind(this);
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect();
    focusVisible.unobserve(this.tabGroup);
    this.resizeObserver.unobserve(this.nav);
  }
  componentWillLoad() {}
  componentDidLoad() {
    // Set initial tab state when the tabs first become visible
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].intersectionRatio > 0) {
        this.setAriaLabels();
        this.setActiveTab(this.getActiveTab() || this.getAllTabs()[0], false);
        observer.unobserve(entries[0].target);
      }
    });
    observer.observe(this.host);

    focusVisible.observe(this.tabGroup);

    this.resizeObserver = new ResizeObserver(() => this.syncHorizontalScroll());
    this.resizeObserver.observe(this.nav);
    requestAnimationFrame(() => this.syncHorizontalScroll());

    // Update aria labels if the DOM changes
    this.mutationObserver = new MutationObserver((mutations) => {
      if (
        mutations.some((mutation) => {
          // TODO: CHECK THIS
          return (
            ['aria-labelledby', 'aria-controls'].indexOf(
              mutation.attributeName
            ) < -1
          );
        })
      ) {
        setTimeout(() => this.setAriaLabels());
      }
    });
    this.mutationObserver.observe(this.host, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillRender() {}
  componentShouldRender() {}
  componentDidRender() {}

  /**
   * 7. Listeners
   */

  /**
   * 8. Public methods API
   */

  /** Shows the specified tab panel. */
  @Method()
  async show(panel: string) {
    const tabs = this.getAllTabs();
    const tab = tabs.find((el: any) => el.panel === panel);

    if (tab) {
      this.setActiveTab(tab);
    }
  }

  /**
   * 9. Local methods
   */

  getAllTabs(includeDisabled = false) {
    const slot = this.tabs.querySelector('slot');
    return [...slot.assignedElements()].filter((el: any) => {
      return includeDisabled
        ? el.tagName.toLowerCase() === 'sl-tab'
        : el.tagName.toLowerCase() === 'sl-tab' && !el.disabled;
    }) as [HTMLElement];
  }

  getAllPanels() {
    const slot = this.body.querySelector('slot');
    return [...slot.assignedElements()].filter(
      (el: any) => el.tagName.toLowerCase() === 'sl-tab-panel'
    ) as [HTMLElement];
  }

  getActiveTab() {
    return this.getAllTabs().find((el: any) => el.active);
  }

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab: any = target.closest('sl-tab');

    if (tab) {
      this.setActiveTab(tab);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    // Activate a tab
    if (['Enter', ' '].indexOf(event.key) > -1) {
      const target = event.target as HTMLElement;
      const tab: any = target.closest('sl-tab');

      if (tab) {
        this.setActiveTab(tab);
        event.preventDefault();
      }
    }

    // Move focus left or right
    if (
      [
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End',
      ].indexOf(event.key) > -1
    ) {
      const activeEl = document.activeElement as any;

      if (activeEl && activeEl.tagName.toLowerCase() === 'sl-tab') {
        const tabs: any = this.getAllTabs();
        let index = tabs.indexOf(activeEl);

        if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = tabs.length - 1;
        } else if (event.key === 'ArrowLeft') {
          index = Math.max(0, index - 1);
        } else if (event.key === 'ArrowRight') {
          index = Math.min(tabs.length - 1, index + 1);
        }

        tabs[index].setFocus();

        if (['top', 'bottom'].indexOf(this.placement) > -1) {
          scrollIntoView(tabs[index], this.nav, 'horizontal');
        }

        event.preventDefault();
      }
    }
  }

  handleScrollLeft() {
    this.nav.scroll({
      left: this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth',
    });
  }

  handleScrollRight() {
    this.nav.scroll({
      left: this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth',
    });
  }

  setActiveTab(tab: any, emitEvents = true) {
    if (tab && tab !== this.activeTab && !tab.disabled) {
      const previousTab: any = this.activeTab;
      this.activeTab = tab;

      // Sync tabs and panels
      this.getAllTabs().map((el: any) => (el.active = el === this.activeTab));
      this.getAllPanels().map(
        (el: any) => (el.active = el.name === (this.activeTab as any).panel)
      );
      this.syncActiveTabIndicator();

      if (['top', 'bottom'].indexOf(this.placement) > -1) {
        scrollIntoView(this.activeTab, this.nav, 'horizontal');
      }

      // Emit events
      if (emitEvents) {
        if (previousTab) {
          this.slTabHide.emit({ name: previousTab.panel });
        }

        this.slTabShow.emit({ name: (this.activeTab as any).panel });
      }
    }
  }

  setAriaLabels() {
    const tabs = this.getAllTabs();
    const panels = this.getAllPanels();

    // Link each tab with its corresponding panel
    tabs.map((tab: any) => {
      const panel = panels.find((el: any) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id'));
        panel.setAttribute('aria-labelledby', tab.getAttribute('id'));
      }
    });
  }

  syncActiveTabIndicator() {
    const tab = this.getActiveTab();
    const width = tab.clientWidth;
    const height = tab.clientHeight;
    const offset = getOffset(tab, this.nav);
    const offsetTop = offset.top + this.nav.scrollTop;
    const offsetLeft = offset.left + this.nav.scrollLeft;

    switch (this.placement) {
      case 'top':
      case 'bottom':
        this.activeTabIndicator.style.width = `${width}px`;
        this.activeTabIndicator.style.height = null;
        this.activeTabIndicator.style.transform = `translateX(${offsetLeft}px)`;
        break;

      case 'left':
      case 'right':
        this.activeTabIndicator.style.width = null;
        this.activeTabIndicator.style.height = `${height}px`;
        this.activeTabIndicator.style.transform = `translateY(${offsetTop}px)`;
        break;
    }
  }

  syncHorizontalScroll() {
    this.canScrollHorizontally =
      ['top', 'bottom'].indexOf(this.placement) > -1 &&
      this.nav.scrollWidth > this.nav.clientWidth;
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <div
        part="base"
        ref={(el) => (this.tabGroup = el)}
        class={{
          'tab-group': true,

          // Placements
          'tab-group--top': this.placement === 'top',
          'tab-group--bottom': this.placement === 'bottom',
          'tab-group--left': this.placement === 'left',
          'tab-group--right': this.placement === 'right',

          'tab-group--horizontal-scroll': this.canScrollHorizontally,
        }}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <div class="tab-group__nav-container">
          {this.canScrollHorizontally && (
            <sl-icon-button
              class="tab-group__scroll-button tab-group__scroll-button--left"
              name="chevron-left"
              onClick={this.handleScrollLeft}
            />
          )}
          <div
            ref={(el) => (this.nav = el)}
            key="nav"
            part="nav"
            class="tab-group__nav"
            tabindex="-1"
          >
            <div
              ref={(el) => (this.tabs = el)}
              part="tabs"
              class="tab-group__tabs"
              role="tablist"
            >
              <div
                ref={(el) => (this.activeTabIndicator = el)}
                part="active-tab-indicator"
                class="tab-group__active-tab-indicator"
              />
              <slot name="nav" />
            </div>
          </div>
          {this.canScrollHorizontally && (
            <sl-icon-button
              class="tab-group__scroll-button tab-group__scroll-button--right"
              name="chevron-right"
              onClick={this.handleScrollRight}
            />
          )}
        </div>

        <div ref={(el) => (this.body = el)} part="body" class="tab-group__body">
          <slot />
        </div>
      </div>
    );
  }
}
