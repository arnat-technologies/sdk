import { Component, Prop, h, Element } from '@stencil/core';
import { focusVisible } from '../../utils/focus-visible';

@Component({
  tag: 'a-icon-button',
  styleUrl: 'icon-button.scss',
  scoped: true,
})
export class IconButton {
  /**
   * 1. Own Properties
   */
  button: HTMLButtonElement;

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

  /** The name of the icon to draw. See the icon component for a full list of icons. */
  @Prop({ reflect: true }) name: string;

  /** An external URL of an SVG file. */
  @Prop({ reflect: true }) src: string;

  /** An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. */
  @Prop({ reflect: true }) label: string;

  /** Set to true to disable the button. */
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
  disconnectedCallback() {
    focusVisible.unobserve(this.button);
  }
  componentWillLoad() {}
  componentDidLoad() {
    focusVisible.observe(this.button);
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

  /**
   * 10. render() function
   */
  render() {
    return (
      <button
        ref={(el) => (this.button = el)}
        part="base"
        class={{
          'icon-button': true,
          'icon-button--disabled': this.disabled,
        }}
        type="button"
      >
        <a-icon name={this.name} src={this.src} label={this.label} />
      </button>
    );
  }
}
