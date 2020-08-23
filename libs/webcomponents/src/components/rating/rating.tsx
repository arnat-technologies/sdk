import {
  State,
  Watch,
  Component,
  h,
  Prop,
  Element,
  Event,
  Method,
  EventEmitter,
} from '@stencil/core';

import { focusVisible } from '../../utils/focus-visible';
import { clamp } from '../../utils/math';

@Component({
  tag: 'a-rating',
  styleUrl: 'rating.scss',
  scoped: true,
})
export class Rating {
  /**
   * 1. Own Properties
   */
  rating: HTMLElement;

  /**
   * 2. Reference to host HTML element.
   */
  @Element() host: HTMLElement;

  /**
   * 3. State() variables
   */

  @State() hoverValue = 0;
  @State() isHovering = false;

  /**
   * 4. Public Property API
   */

  /** The highest rating to show. */
  @Prop() max = 5;

  /** The minimum increment value allowed by the control. */
  @Prop() precision = 1;

  /** Makes the rating readonly. */
  @Prop() readonly = false;

  /** Disables the rating. */
  @Prop() disabled = false;

  /** A function that returns the symbols to display. Accepts an option `value` parameter you can use to map a specific
   * symbol to a value. */
  // @ts-ignore
  @Prop() getSymbol = (value?: number) => '<a-icon name="star-fill"></a-icon>';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** The current rating. */
  @Prop({ mutable: true, reflect: true }) value = 0;

  @Watch('value')
  handleValueChange() {
    this.slChange.emit();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the rating's value changes. */
  @Event() slChange: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  disconnectedCallback() {
    focusVisible.unobserve(this.rating);
  }
  componentWillLoad() {}
  componentDidLoad() {
    focusVisible.observe(this.rating);
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

  /** Sets focus on the rating. */
  @Method()
  async setFocus() {
    this.rating.focus();
  }

  /** Removes focus from the rating. */
  @Method()
  async removeFocus() {
    this.rating.blur();
  }

  /**
   * 9. Local methods
   */

  getValueFromMousePosition(event: MouseEvent) {
    const containerLeft = this.rating.getBoundingClientRect().left;
    const containerWidth = this.rating.getBoundingClientRect().width;
    return clamp(
      this.roundToPrecision(
        ((event.clientX - containerLeft) / containerWidth) * this.max,
        this.precision
      ),
      0,
      this.max
    );
  }

  handleClick(event: MouseEvent) {
    if (this.disabled || this.readonly) {
      return;
    }

    const newValue = this.getValueFromMousePosition(event);

    this.value = newValue === this.value ? 0 : newValue;
    this.isHovering = false;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled || this.readonly) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      const decrement = event.shiftKey ? 1 : this.precision;
      this.value = Math.max(0, this.value - decrement);
      event.preventDefault();
    }

    if (event.key === 'ArrowRight') {
      const increment = event.shiftKey ? 1 : this.precision;
      this.value = Math.min(this.max, this.value + increment);
      event.preventDefault();
    }

    if (event.key === 'Home') {
      this.value = 0;
      event.preventDefault();
    }

    if (event.key === 'End') {
      this.value = this.max;
      event.preventDefault();
    }
  }

  handleMouseEnter() {
    this.isHovering = true;
  }

  handleMouseLeave() {
    this.isHovering = false;
  }

  handleMouseMove(event: MouseEvent) {
    this.hoverValue = this.getValueFromMousePosition(event);
  }

  roundToPrecision(numberToRound: number, precision = 0.5) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }

  /**
   * 10. render() function
   */
  render() {
    const counter = Array.from(Array(this.max).keys());
    let displayValue = 0;

    if (this.disabled || this.readonly) {
      displayValue = this.value;
    } else {
      displayValue = this.isHovering ? this.hoverValue : this.value;
    }

    return (
      <div
        ref={(el) => (this.rating = el)}
        part="base"
        class={{
          rating: true,
          'rating--readonly': this.readonly,
          'rating--disabled': this.disabled,
        }}
        aria-disabled={this.disabled}
        aria-readonly={this.readonly}
        aria-value={this.value}
        aria-valuemin={0}
        aria-valuemax={this.max}
        tabIndex={this.disabled ? -1 : 0}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          {counter.map((index) => (
            <span
              class={{
                rating__symbol: true,
                'rating__symbol--hover':
                  this.isHovering && Math.ceil(displayValue) === index + 1,
              }}
              role="presentation"
              // Users can click the current value to clear the rating. When this happens, we set this.isHovering to
              // false to prevent the hover state from confusing them as they move the mouse out of the control. This
              // extra mouseenter will reinstate it if they happen to mouse over an adjacent symbol.
              onMouseEnter={this.handleMouseEnter}
              innerHTML={this.getSymbol(index + 1)}
            />
          ))}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          {counter.map((index) => (
            <span
              class={{
                rating__symbol: true,
                'rating__symbol--hover':
                  this.isHovering && Math.ceil(displayValue) === index + 1,
              }}
              style={{
                clipPath:
                  displayValue > index + 1
                    ? null
                    : `inset(0 ${
                        100 - ((displayValue - index) / 1) * 100
                      }% 0 0)`,
              }}
              role="presentation"
              innerHTML={this.getSymbol(index + 1)}
            />
          ))}
        </span>
      </div>
    );
  }
}
