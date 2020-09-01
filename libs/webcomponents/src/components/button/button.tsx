import {
  State,
  Component,
  Host,
  h,
  Prop,
  Element,
  EventEmitter,
  Event,
  // Host,
  Method,
} from '@stencil/core';

@Component({
  tag: 'a-button',
  styleUrl: 'button.scss',
  scoped: true,
  shadow: false,
})
export class Button {
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
  @State() hasFocus = false;

  /**
   * 4. Public Property API
   */

  /** The button's type. */
  @Prop({ reflect: true }) type:
    | 'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'text' = 'default';

  /** The button's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to draw the button with a caret for use with dropdowns, popovers, etc. */
  @Prop() caret = false;

  /** Set to true to disable the button. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to draw the button in a loading state. */
  @Prop({ reflect: true }) loading = false;

  /** Set to true to draw a pill-style button with rounded edges. */
  @Prop({ reflect: true }) pill = false;

  /** Set to true to draw a circle button. */
  @Prop({ reflect: true }) circle = false;

  /** Indicates if activating the button should submit the form. Ignored when `href` is set. */
  @Prop({ reflect: true }) submit = false;

  /** An optional name for the button. Ignored when `href` is set. */
  @Prop() name: string;

  /** An optional value for the button. Ignored when `href` is set. */
  @Prop() value: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @Prop() href: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @Prop() target: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @Prop() download: string;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /**
   * 5. Events section
   */

  /** Emitted when the button loses focus. */
  @Event() slBlur: EventEmitter;

  /** Emitted when the button gains focus. */
  @Event() slFocus: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  /** Sets focus on the button. */
  @Method()
  async setFocus() {
    this.button.focus();
  }

  /** Removes focus from the button. */
  @Method()
  async removeFocus() {
    this.button.blur();
  }

  /**
   * 9. Local methods
   */

  handleBlur() {
    this.hasFocus = false;
    this.slBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.slFocus.emit();
  }

  handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /**
   * 10. render() function
   */

  renderGatito() {
    return (
      <button class="mb-3 rounded-full flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
        Default gatito
      </button>
    );
  }
  renderConejito() {
    return (
      <button class="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
        Default conejito
      </button>
    );
  }

  selectStrategy(template = 'rounded') {
    switch (template) {
      case 'rounded':
        return this.renderGatito();
      case 'conejito':
        return this.renderConejito();
      default:
        break;
    }
  }

  /**
   * 10. render() function
   * Always the last one in the class.
   */
  render() {
    //
    //
    return <Host>{this.selectStrategy('rounded')}</Host>;
    // return (
    //   <div class="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
    //     Default conejito
    //   </div>
    // );
  }

  // render() {
  //   return (
  //     //
  //     //
  //     // <button class="mb-3 rounded-full flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
  //     //   Default gatito
  //     // </button>
  //     // <button class="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
  //     //   Default conejito
  //     // </button>
  //     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  //       Button
  //     </button>
  //   );
  //   // const isLink = this.href ? true : false;
  //   // const isButton = !isLink;
  //   // const Button = isLink ? 'a' : 'button';

  //   // return (
  //   //   <Button
  //   //     ref={(el) => (this.button = el)}
  //   //     part="base"
  //   //     class={{
  //   //       button: true,

  //   //       // Types
  //   //       'button--default': this.type === 'default',
  //   //       'button--primary': this.type === 'primary',
  //   //       'button--success': this.type === 'success',
  //   //       'button--info': this.type === 'info',
  //   //       'button--warning': this.type === 'warning',
  //   //       'button--danger': this.type === 'danger',
  //   //       'button--text': this.type === 'text',

  //   //       // Sizes
  //   //       'button--small': this.size === 'small',
  //   //       'button--medium': this.size === 'medium',
  //   //       'button--large': this.size === 'large',

  //   //       // Modifiers
  //   //       'button--caret': this.caret,
  //   //       'button--circle': this.circle,
  //   //       'button--disabled': this.disabled,
  //   //       'button--focused': this.hasFocus,
  //   //       'button--loading': this.loading,
  //   //       'button--pill': this.pill,
  //   //     }}
  //   //     disabled={this.disabled}
  //   //     type={isButton ? (this.submit ? 'submit' : 'button') : null}
  //   //     name={isButton ? this.name : null}
  //   //     value={isButton ? this.value : null}
  //   //     href={isLink && this.href}
  //   //     target={isLink && this.target ? this.target : null}
  //   //     download={isLink && this.download ? this.download : null}
  //   //     rel={isLink && this.target ? 'noreferrer noopener' : null}
  //   //     onBlur={this.handleBlur}
  //   //     onFocus={this.handleFocus}
  //   //     onClick={this.handleClick}
  //   //   >
  //   //     <span part="prefix" class="button__prefix">
  //   //       <slot name="prefix" />
  //   //     </span>
  //   //     <span part="label" class="button__label">
  //   //       <slot />
  //   //     </span>
  //   //     <span part="suffix" class="button__suffix">
  //   //       <slot name="suffix" />
  //   //     </span>
  //   //     {this.caret && (
  //   //       <span part="caret" class="button__caret">
  //   //         <svg
  //   //           viewBox="0 0 24 24"
  //   //           fill="none"
  //   //           stroke="currentColor"
  //   //           stroke-width="2"
  //   //           stroke-linecap="round"
  //   //           stroke-linejoin="round"
  //   //         >
  //   //           <polyline points="6 9 12 15 18 9"></polyline>
  //   //         </svg>
  //   //       </span>
  //   //     )}

  //   //     {this.loading && <sl-spinner />}
  //   //   </Button>
  //   // );
  // }
}
