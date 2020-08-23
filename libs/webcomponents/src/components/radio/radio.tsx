import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';

let id = 0;

@Component({
  tag: 'a-radio',
  styleUrl: 'radio.scss',
  scoped: true,
})
export class Radio {
  /**
   * 1. Own Properties
   */

  inputId = `radio-${++id}`;
  labelId = `radio-label-${id}`;
  input: HTMLInputElement;

  /**
   * 2. Reference to host HTML element.
   */
  @Element() host: HTMLElement;

  /**
   * 3. State() variables
   */

  @State() hasFocus = false;

  /**
   * 4. Public Property API
   */

  /** The radio's name attribute. */
  @Prop() name: string;

  /** The radio's value attribute. */
  @Prop() value: string;

  /** Set to true to disable the radio. */
  @Prop() disabled = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** Set to true to draw the radio in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  @Watch('checked')
  handleCheckedChange() {
    if (this.checked) {
      this.getSiblingRadios().map((radio: any) => (radio.checked = false));
    }
    this.input.checked = this.checked;
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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
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

  /** Sets focus on the radio. */
  @Method()
  async setFocus() {
    this.input.focus();
  }

  /** Removes focus from the radio. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  /**
   * 9. Local methods
   */

  getAllRadios() {
    const form = this.host.closest('sl-form, form') || document.body;

    if (!this.name) return [];

    return Array.prototype.slice
      .call(form.querySelectorAll('sl-radio'))
      .filter((radio: any) => radio.name === this.name) as HTMLElement[];
  }

  getSiblingRadios() {
    return this.getAllRadios().filter(
      (radio) => radio !== this.host
    ) as HTMLElement[];
  }

  handleClick() {
    this.checked = this.input.checked;
  }

  handleBlur() {
    this.hasFocus = false;
    this.slBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.slFocus.emit();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(event.key) >
      -1
    ) {
      const radios: any = this.getAllRadios().filter(
        (radio: any) => !radio.disabled
      );
      const incr = ['ArrowUp', 'ArrowLeft'].indexOf(event.key) > -1 ? -1 : 1;
      let index = radios.indexOf(this.host) + incr;
      if (index < 0) index = radios.length - 1;
      if (index > radios.length - 1) index = 0;

      this.getAllRadios().map((radio: any) => (radio.checked = false));
      radios[index].setFocus();
      radios[index].checked = true;

      event.preventDefault();
    }
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
          radio: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
          'radio--focused': this.hasFocus,
        }}
        htmlFor={this.inputId}
        role="radio"
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
      >
        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>

          <input
            ref={(el) => (this.input = el)}
            id={this.inputId}
            type="radio"
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

        <span part="label" id={this.labelId} class="radio__label">
          <slot />
        </span>
      </label>
    );
  }
}
