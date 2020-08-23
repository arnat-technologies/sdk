import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'a-progress-bar',
  styleUrl: 'progress-bar.scss',
  scoped: true,
})
export class ProgressBar {
  /**
   * 1. Own Properties
   */

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

  /** The progress bar's percentage, 0 to 100. */
  @Prop() percentage = 0;

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
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={this.percentage}
      >
        <div
          part="indicator"
          class="progress-bar__indicator"
          style={{
            width: `${this.percentage}%`,
          }}
        >
          <span part="label" class="progress-bar__label">
            <slot />
          </span>
        </div>
      </div>
    );
  }
}
