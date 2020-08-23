import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'a-badge',
  styleUrl: 'badge.scss',
  scoped: true,
})
export class Badge {
  /**
   * 1. Own Properties
   */
  badge: HTMLElement;

  /**
   * 2. Reference to host HTML element.
   */
  @Element() el: HTMLElement;

  /**
   * 3. State() variables
   */

  /**
   * 4. Public Property API
   */

  /** The badge's type. */
  @Prop() type: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text' =
    'primary';

  /** Set to true to draw a pill-style badge with rounded edges. */
  @Prop() pill = false;

  /** Set to true to make the badge pulsate to draw attention. */
  @Prop() pulse = false;

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
      <span
        ref={(el) => (this.badge = el)}
        part="base"
        class={{
          badge: true,

          // Types
          'badge--primary': this.type === 'primary',
          'badge--success': this.type === 'success',
          'badge--info': this.type === 'info',
          'badge--warning': this.type === 'warning',
          'badge--danger': this.type === 'danger',
          'badge--text': this.type === 'text',
          'badge--pill': this.pill,
          'badge--pulse': this.pulse,
        }}
        role="status"
      >
        <slot />
      </span>
    );
  }
}
