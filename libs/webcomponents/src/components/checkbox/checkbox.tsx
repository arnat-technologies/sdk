import {
  Component,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Element,
  Watch,
  h,
} from '@stencil/core';

let id = 0;

@Component({
  tag: 'a-checkbox',
  styleUrl: 'checkbox.scss',
  scoped: true,
})
export class Checkbox {
  /**
   * 1. Own Properties
   */

  inputId = `checkbox-${++id}`;
  labelId = `checkbox-label-${id}`;
  input: HTMLInputElement;

  /**
   * 2. Reference to host HTML element.
   */
  @Element() el: HTMLElement;

  /**
   * 3. State() variables
   */

  @State() hasFocus = false;

  /**
   * 4. Public Property API
   */

  /** The checkbox's name attribute. */
  @Prop() name: string;

  /** The checkbox's value attribute. */
  @Prop() value: string;

  /** Set to true to disable the checkbox. */
  @Prop() disabled = false;

  /** Set to true to draw the checkbox in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** Set to true to draw the checkbox in an indeterminate state. */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  @Watch('checked')
  @Watch('indeterminate')
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.slChange.emit();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the control loses focus. */
  @Event() slBlur: EventEmitter;

  /** Emitted when the control's checked state changes. */
  @Event() slChange: EventEmitter;

  /** Emitted when the control gains focus. */
  @Event() slFocus: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  disconnectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {
    this.input.indeterminate = this.indeterminate;
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

  /** Sets focus on the checkbox. */
  @Method()
  async setFocus() {
    this.input.focus();
  }

  /** Removes focus from the checkbox. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  /**
   * 9. Local methods
   */

  handleClick() {
    this.checked = this.input.checked;
    this.indeterminate = this.input.indeterminate;
  }

  handleBlur() {
    this.hasFocus = false;
    this.slBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.slFocus.emit();
  }

  handleMouseDown(event: MouseEvent) {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.input.focus();
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <label
        part="base"
        class={{
          checkbox: true,
          'checkbox--checked': this.checked,
          'checkbox--disabled': this.disabled,
          'checkbox--focused': this.hasFocus,
          'checkbox--indeterminate': this.indeterminate,
        }}
        htmlFor={this.inputId}
        role="checkbox"
        onMouseDown={this.handleMouseDown}
      >
        <span part="control" class="checkbox__control">
          {this.checked && (
            <span part="checked-icon" class="checkbox__icon">
              <svg viewBox="0 0 16 16">
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g stroke="currentColor" stroke-width="2">
                    <g transform="translate(3.428571, 3.428571)">
                      <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                      <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          )}

          {!this.checked && this.indeterminate && (
            <span part="indeterminate-icon" class="checkbox__icon">
              <svg viewBox="0 0 16 16">
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g stroke="currentColor" stroke-width="2">
                    <g transform="translate(2.285714, 6.857143)">
                      <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          )}

          <input
            ref={(el) => (this.input = el)}
            id={this.inputId}
            type="checkbox"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            aria-labelledby={this.labelId}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
          />
        </span>

        <span part="label" id={this.labelId} class="checkbox__label">
          <slot />
        </span>
      </label>
    );
  }
}
