import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import Popover from '../../utils/popover';

let id = 0;

@Component({
  tag: 'a-tooltip',
  styleUrl: 'tooltip.scss',
  scoped: true,
})
export class Tooltip {
  /**
   * 1. Own Properties
   */
  componentId = `tooltip-${++id}`;
  isShowing = false;
  popover: Popover;
  target: HTMLElement;
  tooltip: any;

  /**
   * 2. Reference to host HTML element.
   */
  @Element() host: HTMLElement;

  /**
   * 3. State() variables
   */

  /**
   * 4. Public Property API
   */

  /** The tooltip's content. */
  @Prop() content = '';

  /**
   * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   */
  @Prop() placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'top';

  /** Set to true to disable the tooltip so it won't show when triggered. */
  @Prop() disabled = false;

  /** The distance in pixels from which to offset the tooltip away from its target. */
  @Prop() distance = 10;

  /** The distance in pixels from which to offset the tooltip along its target. */
  @Prop() skidding = 0;

  /**
   * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   */
  @Prop() trigger: string = 'hover focus';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the tooltip begins to show. Calling `event.preventDefault()` will prevent it from being shown. */
  @Event() slShow: EventEmitter;

  /** Emitted after the tooltip has shown and all transitions are complete. */
  @Event() slAfterShow: EventEmitter;

  /** Emitted when the tooltip begins to hide. Calling `event.preventDefault()` will prevent it from being hidden. */
  @Event() slHide: EventEmitter;

  /** Emitted after the tooltip has hidden and all transitions are complete. */
  @Event() slAfterHide: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.popover.destroy();

    this.host.removeEventListener('blur', this.handleBlur, true);
    this.host.removeEventListener('click', this.handleClick, true);
    this.host.removeEventListener('focus', this.handleFocus, true);
    this.host.shadowRoot
      .querySelector('slot')
      .removeEventListener('slotchange', this.handleSlotChange);
  }
  componentWillLoad() {}
  componentDidLoad() {
    const slot = this.host.shadowRoot.querySelector('slot');

    this.target = this.getTarget();
    this.popover = new Popover(this.target, this.tooltip);
    this.syncOptions();

    this.host.addEventListener('blur', this.handleBlur, true);
    this.host.addEventListener('click', this.handleClick, true);
    this.host.addEventListener('focus', this.handleFocus, true);
    slot.addEventListener('slotchange', this.handleSlotChange);

    // Show on init if open
    this.tooltip.hidden = !this.open;
    if (this.open) {
      this.show();
    }
  }
  componentWillUpdate() {}
  componentDidUpdate() {
    this.syncOptions();
  }
  componentWillRender() {}
  componentShouldRender() {}
  componentDidRender() {}

  /**
   * 7. Listeners
   */

  /**
   * 8. Public methods API
   */

  /** Shows the tooltip. */
  @Method()
  async show() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (this.isShowing) {
      return;
    }

    const slShow = this.slShow.emit();
    if (slShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.isShowing = true;
    this.open = true;
    this.popover.show();
  }

  /** Shows the tooltip. */
  @Method()
  async hide() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (!this.isShowing) {
      return;
    }

    const slHide = this.slHide.emit();
    if (slHide.defaultPrevented) {
      this.open = true;
      return;
    }

    this.isShowing = false;
    this.open = false;
    this.popover.hide();
  }

  /**
   * 9. Local methods
   */

  getTarget() {
    const target = this.host.querySelector('*:not(style)') as HTMLElement;
    if (!target) {
      throw new Error('Invalid tooltip target: no child element was found.');
    }

    return target;
  }

  handleBlur() {
    if (this.hasTrigger('focus')) {
      this.hide();
    }
  }

  handleClick() {
    if (this.hasTrigger('click')) {
      this.open ? this.hide() : this.show();
    }
  }

  handleFocus() {
    if (this.hasTrigger('focus')) {
      this.show();
    }
  }

  handleMouseOver() {
    if (this.hasTrigger('hover')) {
      this.show();
    }
  }

  handleMouseOut() {
    if (this.hasTrigger('hover')) {
      this.hide();
    }
  }

  handleSlotChange() {
    const oldTarget = this.target;
    const newTarget = this.getTarget();

    if (newTarget !== oldTarget) {
      oldTarget.removeAttribute('aria-describedby');
      newTarget.setAttribute('aria-describedby', this.componentId);
    }
  }

  hasTrigger(triggerType: string) {
    const triggers = this.trigger.split(' ');
    return triggers.indexOf(triggerType) > -1;
  }

  syncOptions() {
    this.popover.setOptions({
      placement: this.placement,
      skidding: this.skidding,
      distance: this.distance,
      onAfterHide: () => this.slAfterHide.emit(),
      onAfterShow: () => this.slAfterShow.emit(),
    });
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <Host onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <slot aria-describedby={this.componentId} />

        {!this.disabled && (
          <div
            part="base"
            ref={(el) => (this.tooltip = el)}
            id={this.componentId}
            class={{
              tooltip: true,
              'tooltip--open': this.open,
            }}
            role="tooltip"
            aria-hidden={!this.open}
          >
            {this.content}
          </div>
        )}
      </Host>
    );
  }
}
