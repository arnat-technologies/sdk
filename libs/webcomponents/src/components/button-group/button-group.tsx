import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'a-button-group',
  styleUrl: 'button-group.scss',
  scoped: true,
})
export class ButtonGroup {
  /**
   * 1. Own Properties
   */
  buttonGroup: HTMLElement;

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

  /** A label to use for the button groups `aria-label` attribute. */
  @Prop() label = '';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /**
   * 5. Events section
   */

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  disconnectedCallback() {
    this.buttonGroup.removeEventListener('slFocus', this.handleFocus);
    this.buttonGroup.removeEventListener('slBlur', this.handleBlur);
  }
  componentWillLoad() {}
  componentDidLoad() {
    this.buttonGroup.addEventListener('slFocus', this.handleFocus);
    this.buttonGroup.addEventListener('slBlur', this.handleBlur);
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

  /**
   * 9. Local methods
   */

  handleFocus(event: CustomEvent) {
    const button = event.target as HTMLElement;
    button.classList.add('sl-focus');
  }

  handleBlur(event: CustomEvent) {
    const button = event.target as HTMLElement;
    button.classList.remove('sl-focus');
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <div
        ref={(el) => (this.buttonGroup = el)}
        part="base"
        class="button-group"
        aria-label={this.label}
      >
        <slot />
      </div>
    );
  }
}
