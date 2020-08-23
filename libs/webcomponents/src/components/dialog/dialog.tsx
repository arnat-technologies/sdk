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

import { lockBodyScrolling, unlockBodyScrolling } from '../../utils/scroll';
import { hasSlot } from '../../utils/slot';

let id = 0;

@Component({
  tag: 'a-dialog',
  styleUrl: 'dialog.scss',
  scoped: true,
})
export class Dialog {
  /**
   * 1. Own Properties
   */
  componentId = `dialog-${++id}`;
  dialog: HTMLElement;
  isShowing = false;
  panel: HTMLElement;

  /**
   * 2. Reference to host HTML element.
   */
  @Element() host: HTMLElement;

  /**
   * 3. State() variables
   */

  @State() hasFooter = false;

  /**
   * 4. Public Property API
   */

  /**
   * The dialog's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  @Prop() label = '';

  /**
   * Set to true to disable the header. This will also remove the default close button, so please ensure you provide an
   * easy, accessible way for users to dismiss the dialog.
   */
  @Prop() noHeader = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** Indicates whether or not the dialog is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the dialog opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event() slShow: EventEmitter;

  /** Emitted after the dialog opens and all transitions are complete. */
  @Event() slAfterShow: EventEmitter;

  /** Emitted when the dialog closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event() slHide: EventEmitter;

  /** Emitted after the dialog closes and all transitions are complete. */
  @Event() slAfterHide: EventEmitter;

  /** Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the dialog from closing. */
  @Event() slOverlayDismiss: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleDocumentFocusIn = this.handleDocumentFocusIn.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }
  disconnectedCallback() {
    unlockBodyScrolling(this.host);

    this.host.shadowRoot.removeEventListener('slotchange', this.updateSlots);
  }
  componentWillLoad() {
    this.updateSlots();
    this.host.shadowRoot.addEventListener('slotchange', this.updateSlots);
  }
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

  /** Shows the dialog */
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

    this.dialog.hidden = false;
    this.host.clientWidth; // force a reflow
    this.isShowing = true;
    this.open = true;

    lockBodyScrolling(this.host);
    document.addEventListener('focusin', this.handleDocumentFocusIn);
  }

  /** Hides the dialog */
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

    unlockBodyScrolling(this.host);
    document.removeEventListener('focusin', this.handleDocumentFocusIn);
  }

  /**
   * 9. Local methods
   */

  handleCloseClick() {
    this.hide();
  }

  handleDocumentFocusIn(event: Event) {
    const target = event.target as HTMLElement;

    if (target.closest('sl-dialog') !== this.host) {
      this.panel.focus();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.hide();
    }
  }

  handleOverlayClick() {
    const slOverlayDismiss = this.slOverlayDismiss.emit();

    if (!slOverlayDismiss.defaultPrevented) {
      this.hide();
    }
  }

  handleTransitionEnd(event: TransitionEvent) {
    const target = event.target as HTMLElement;

    // Ensure we only emit one event when the target element is no longer visible
    if (
      event.propertyName === 'opacity' &&
      target.classList.contains('dialog__panel')
    ) {
      this.dialog.hidden = !this.open;
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();

      if (this.open) {
        this.panel.focus();
      }
    }
  }

  updateSlots() {
    this.hasFooter = hasSlot(this.host, 'footer');
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <div
        ref={(el) => (this.dialog = el)}
        part="base"
        class={{
          dialog: true,
          'dialog--open': this.open,
          'dialog--has-footer': this.hasFooter,
        }}
        onKeyDown={this.handleKeyDown}
        onTransitionEnd={this.handleTransitionEnd}
        hidden
      >
        <div
          part="overlay"
          class="dialog__overlay"
          onClick={this.handleOverlayClick}
        />

        <div
          ref={(el) => (this.panel = el)}
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden={!this.open}
          aria-label={this.noHeader ? this.label : null}
          aria-labelledby={!this.noHeader ? `${this.componentId}-title` : null}
          tabIndex={0}
        >
          {!this.noHeader && (
            <header part="header" class="dialog__header">
              <span
                part="title"
                class="dialog__title"
                id={`${this.componentId}-title`}
              >
                {/* If there's no label, use an invisible character to prevent the heading from collapsing */}
                {this.label || String.fromCharCode(65279)}
              </span>
              <sl-icon-button
                part="close-button"
                class="dialog__close"
                name="x"
                onClick={this.handleCloseClick}
              />
            </header>
          )}

          <div part="body" class="dialog__body">
            <slot />
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    );
  }
}
