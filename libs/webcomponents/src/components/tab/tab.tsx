import { Component, Element, Host, Method, Prop, h } from '@stencil/core';

let id = 0;

@Component({
  tag: 'a-tab',
  styleUrl: 'tab.scss',
  scoped: true,
})
export class Tab {
  /**
   * 1. Own Properties
   */
  componentId = `tab-${++id}`;
  tab: HTMLElement;

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

  /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
  @Prop({ reflect: true }) panel = '';

  /** Set to true to draw the tab in an active state. */
  @Prop({ reflect: true }) active = false;

  /** Set to true to draw the tab in a disabled state. */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /**
   * 5. Events section
   */

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {}
  disconnectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {}
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

  /** Sets focus to the tab. */
  @Method()
  async setFocus() {
    this.tab.focus({ preventScroll: true });
  }

  /** Removes focus from the tab. */
  @Method()
  async removeFocus() {
    this.tab.blur();
  }

  /**
   * 9. Local methods
   */

  /**
   * 10. render() function
   */
  render() {
    return (
      // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
      <Host id={this.host.id || this.componentId}>
        <div
          part="base"
          ref={(el) => (this.tab = el)}
          class={{
            tab: true,

            // States
            'tab--active': this.active,
            'tab--disabled': this.disabled,
          }}
          role="tab"
          aria-disabled={this.disabled}
          aria-selected={this.active}
          tabindex={this.disabled || !this.active ? '-1' : '0'}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
