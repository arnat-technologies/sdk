import {
  Component,
  Event,
  EventEmitter,
  Method,
  Prop,
  Element,
  Watch,
  h,
} from '@stencil/core';
import { focusVisible } from '../../utils/focus-visible';

let id = 0;

@Component({
  tag: 'a-details',
  styleUrl: 'details.scss',
  scoped: true,
})
export class Details {
  /**
   * 1. Own Properties
   */

  body: HTMLElement;
  componentId = `details-${++id}`;
  details: HTMLElement;
  header: HTMLElement;
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

  /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
  @Prop() summary = '';

  /** Set to true to prevent the user from toggling the details. */
  @Prop() disabled = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** Indicates whether or not the details is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the details opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event() slShow: EventEmitter;

  /** Emitted after the details opens and all transitions are complete. */
  @Event() slAfterShow: EventEmitter;

  /** Emitted when the details closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event() slHide: EventEmitter;

  /** Emitted after the details closes and all transitions are complete. */
  @Event() slAfterHide: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleBodyTransitionEnd = this.handleBodyTransitionEnd.bind(this);
    this.handleSummaryClick = this.handleSummaryClick.bind(this);
    this.handleSummaryKeyDown = this.handleSummaryKeyDown.bind(this);
  }
  disconnectedCallback() {
    focusVisible.unobserve(this.details);
  }
  componentWillLoad() {}
  componentDidLoad() {
    focusVisible.observe(this.details);

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

    if (this.body.scrollHeight === 0) {
      // When the scroll height can't be measured, use auto. This prevents a borked open state when the details is open
      // intiially, but not immediately visible (i.e. in a tab panel).
      this.body.style.height = 'auto';
      this.body.style.overflow = 'visible';
    } else {
      this.body.style.height = `${this.body.scrollHeight}px`;
      this.body.style.overflow = 'hidden';
    }

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

    // We can't transition out of `height: auto`, so let's set it to the current height first
    this.body.style.height = `${this.body.scrollHeight}px`;
    this.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      this.body.clientWidth; // force a reflow
      this.body.style.height = '0';
    });

    this.isShowing = false;
    this.open = false;
  }

  /**
   * 9. Local methods
   */

  handleBodyTransitionEnd(event: TransitionEvent) {
    const target = event.target as HTMLElement;

    // Ensure we only emit one event when the target element is no longer visible
    if (
      event.propertyName === 'height' &&
      target.classList.contains('details__body')
    ) {
      this.body.style.overflow = this.open ? 'visible' : 'hidden';
      this.body.style.height = this.open ? 'auto' : '0';
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  }

  handleSummaryClick() {
    if (!this.disabled) {
      this.open ? this.hide() : this.show();
      this.header.focus();
    }
  }

  handleSummaryKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.open ? this.hide() : this.show();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <div
        ref={(el) => (this.details = el)}
        part="base"
        class={{
          details: true,
          'details--open': this.open,
          'details--disabled': this.disabled,
        }}
      >
        <header
          ref={(el) => (this.header = el)}
          part="header"
          id={`${this.componentId}-header`}
          class="details__header"
          role="button"
          aria-expanded={this.open}
          aria-controls={`${this.componentId}-content`}
          aria-disabled={this.disabled}
          tabIndex={this.disabled ? -1 : 0}
          onClick={this.handleSummaryClick}
          onKeyDown={this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">{this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <a-icon name="chevron-right" />
          </span>
        </header>

        <div
          ref={(el) => (this.body = el)}
          class="details__body"
          onTransitionEnd={this.handleBodyTransitionEnd}
        >
          <div
            part="content"
            id={`${this.componentId}-content`}
            class="details__content"
            role="region"
            aria-labelledby={`${this.componentId}-header`}
          >
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
