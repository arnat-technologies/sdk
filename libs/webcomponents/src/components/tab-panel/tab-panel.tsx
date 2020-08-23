import { Component, Element, Host, Prop, h } from '@stencil/core';

let id = 0;

@Component({
  tag: 'a-tab-panel',
  styleUrl: 'tab-panel.scss',
  scoped: true,
})
export class TabPanel {
  /**
   * 1. Own Properties
   */

  componentId = `tab-panel-${++id}`;

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

  /** The tab panel's name. */
  @Prop() name = '';

  /** When true, the tab panel will be shown. */
  @Prop() active = false;

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

  /**
   * 9. Local methods
   */

  /**
   * 10. render() function
   */
  render() {
    return (
      // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
      <Host
        id={this.host.id || this.componentId}
        style={{ display: this.active ? 'block' : 'none' }}
      >
        <div
          part="base"
          class="tab-panel"
          role="tabpanel"
          aria-selected={this.active}
          aria-hidden={!this.active}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
