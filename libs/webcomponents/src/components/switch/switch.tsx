import {
  Component,
  Event,
  EventEmitter,
  Method,
  Element,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';

let id = 0;

@Component({
  tag: 'a-switch',
  styleUrl: 'switch.scss',
  scoped: true,
})
export class Switch {
  /**
   * 1. Own Properties
   */

  switchId = `switch-${++id}`;
  labelId = `switch-label-${id}`;
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

  /** The switch's name attribute. */
  @Prop() name: string;

  /** The switch's value attribute. */
  @Prop() value: string;

  /** Set to true to disable the switch. */
  @Prop() disabled = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** Set to true to draw the switch in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  @Watch('checked')
  handleCheckedChange() {
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

  /** Sets focus on the switch. */
  @Method()
  async setFocus() {
    this.input.focus();
  }

  /** Removes focus from the switch. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  /**
   * 9. Local methods
   */

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
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.checked = false;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.checked = true;
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
        htmlFor={this.switchId}
        role="switch"
        class={{
          switch: true,
          'switch--checked': this.checked,
          'switch--disabled': this.disabled,
          'switch--focused': this.hasFocus,
        }}
        onMouseDown={this.handleMouseDown}
      >
        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb" />

          <input
            ref={(el) => (this.input = el)}
            id={this.switchId}
            type="checkbox"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            aria-labelledby={this.labelId}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
          />
        </span>

        <span part="label" id={this.labelId} class="switch__label">
          <slot />
        </span>
      </label>
    );
  }
}
