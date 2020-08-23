import { State, Component, h, Element } from '@stencil/core';
import { hasSlot } from '../../utils/slot';

@Component({
  tag: 'a-card',
  styleUrl: 'card.scss',
  scoped: true,
})
export class Card {
  /**
   * 1. Own Properties
   */

  /**
   * 2. Reference to host HTML element.
   */
  @Element() host: HTMLElement;

  /**
   * 3. State() variables
   */

  @State() hasFooter = false;
  @State() hasImage = false;
  @State() hasHeader = false;

  /**
   * 4. Public Property API
   */

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
  disconnectedCallback() {
    this.host.shadowRoot.removeEventListener('slotchange', this.updateSlots);
  }
  componentWillLoad() {
    this.updateSlots();
    this.host.shadowRoot.addEventListener('slotchange', this.updateSlots);
  }
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

  updateSlots() {
    this.hasFooter = hasSlot(this.host, 'footer');
    this.hasImage = hasSlot(this.host, 'image');
    this.hasHeader = hasSlot(this.host, 'header');
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <div
        part="base"
        class={{
          card: true,
          'card--has-footer': this.hasFooter,
          'card--has-image': this.hasImage,
          'card--has-header': this.hasHeader,
        }}
      >
        <div part="image" class="card__image">
          <slot name="image" />
        </div>

        <div part="header" class="card__header">
          <slot name="header" />
        </div>

        <div part="body" class="card__body">
          <slot />
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer" />
        </div>
      </div>
    );
  }
}
