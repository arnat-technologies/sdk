import {
  Component,
  h,
  Prop,
  Host,
  Element,
  Method,
  Event,
  Watch,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'a-alert',
  styleUrl: 'alert.scss',
  scoped: true,
})
export class Alert {
  /**
   * 1. Own Properties
   */
  alert: HTMLElement;
  isShowing = false;

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

  /** Set to true to make the alert closable. */
  @Prop() closable = false;

  /** The type of alert. */
  @Prop() type: 'primary' | 'success' | 'info' | 'warning' | 'danger' =
    'primary';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */
  /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  /**
   * 5. Events section
   */
  /** Emitted when the alert opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event() slShow: EventEmitter;

  /** Emitted after the alert opens and all transitions are complete. */
  @Event() slAfterShow: EventEmitter;

  /** Emitted when the alert closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event() slHide: EventEmitter;

  /** Emitted after the alert closes and all transitions are complete. */
  @Event() slAfterHide: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }
  disconnectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {
    // Show on init if open
    if (this.open) {
      this.show();
    }
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

  /** Shows the alert. */
  @Method()
  async show() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (this.isShowing) {
      return;
    }

    const slShow = this.slShow.emit();
    if (slShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.el.hidden = false;
    this.el.clientWidth; // force a reflow
    this.isShowing = true;
    this.open = true;
  }

  /** Hides the alert */
  @Method()
  async hide() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (!this.isShowing) {
      return;
    }

    const slHide = this.slHide.emit();
    if (slHide.defaultPrevented) {
      this.open = true;
      return;
    }

    this.isShowing = false;
    this.open = false;
  }

  /**
   * 9. Local methods
   */

  handleCloseClick() {
    this.hide();
  }

  handleTransitionEnd(event: TransitionEvent) {
    const target = event.target as HTMLElement;

    // Ensure we only emit one event when the target element is no longer visible
    if (
      event.propertyName === 'opacity' &&
      target.classList.contains('alert')
    ) {
      this.el.hidden = !this.open;
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <Host hidden>
        <div
          ref={(el) => (this.alert = el)}
          part="base"
          class={{
            alert: true,
            'alert--open': this.open,
            'alert--closable': this.closable,

            // States
            'alert--primary': this.type === 'primary',
            'alert--success': this.type === 'success',
            'alert--info': this.type === 'info',
            'alert--warning': this.type === 'warning',
            'alert--danger': this.type === 'danger',
          }}
          role="alert"
          aria-hidden={!this.open}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <span part="icon" class="alert__icon">
            <slot name="icon" />
          </span>

          <span part="message" class="alert__message">
            <slot />
          </span>

          {this.closable && (
            <sl-icon-button
              part="close-button"
              class="alert__close"
              name="x"
              onClick={this.handleCloseClick}
            />
          )}
        </div>
      </Host>
    );
  }
}
