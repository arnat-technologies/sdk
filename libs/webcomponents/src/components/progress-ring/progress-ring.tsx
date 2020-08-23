import { Component, Element, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'a-progress-ring',
  styleUrl: 'progress-ring.scss',
  scoped: true,
})
export class ProgressRing {
  /**
   * 1. Own Properties
   */
  indicator: SVGCircleElement;

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

  /** The size of the progress ring in pixels. */
  @Prop() size = 128;

  /** The stroke width of the progress ring in pixels. */
  @Prop() strokeWidth = 4;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** The current progress percentage, 0 - 100. */
  @Prop() percentage: number;

  @Watch('percentage')
  handlePercentageChange() {
    this.updateProgress();
  }

  /**
   * 5. Events section
   */

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {}
  disconnectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {
    this.updateProgress();
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

  updateProgress() {
    const radius = this.indicator.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (this.percentage / 100) * circumference;

    this.indicator.style.strokeDasharray = `${circumference} ${circumference}`;
    this.indicator.style.strokeDashoffset = `${offset}`;
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <div part="base" class="progress-ring">
        <svg class="progress-ring__image" width={this.size} height={this.size}>
          <circle
            class="progress-ring__track"
            stroke-width={this.strokeWidth}
            stroke-linecap="round"
            fill="transparent"
            r={this.size / 2 - this.strokeWidth * 2}
            cx={this.size / 2}
            cy={this.size / 2}
          />

          <circle
            ref={(el: SVGCircleElement) => (this.indicator = el)}
            class="progress-ring__indicator"
            stroke-width={this.strokeWidth}
            stroke-linecap="round"
            fill="transparent"
            r={this.size / 2 - this.strokeWidth * 2}
            cx={this.size / 2}
            cy={this.size / 2}
          />
        </svg>

        <span part="label" class="progress-ring__label">
          <slot />
        </span>
      </div>
    );
  }
}
