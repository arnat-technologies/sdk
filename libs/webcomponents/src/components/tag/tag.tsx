import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  h,
} from '@stencil/core';

@Component({
  tag: 'a-tag',
  styleUrl: 'tag.scss',
  scoped: true,
})
export class Tag {
  /**
   * 1. Own Properties
   */
  tag: HTMLElement;

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

  /** The tag's type. */
  @Prop({ reflect: true }) type:
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'text' = 'primary';

  /** The tag's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to draw a pill-style tag with rounded edges. */
  @Prop({ reflect: true }) pill = false;

  /** Set to true to make the tag clearable. */
  @Prop({ reflect: true }) clearable = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /**
   * 5. Events section
   */

  /** Emitted when the clear button is activated. */
  @Event() slClear: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleClearClick = this.handleClearClick.bind(this);
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

  /**
   * 9. Local methods
   */

  handleClearClick() {
    this.slClear.emit();
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <span
        ref={(el) => (this.tag = el)}
        part="base"
        class={{
          tag: true,

          // Types
          'tag--primary': this.type === 'primary',
          'tag--success': this.type === 'success',
          'tag--info': this.type === 'info',
          'tag--warning': this.type === 'warning',
          'tag--danger': this.type === 'danger',
          'tag--text': this.type === 'text',

          // Sizes
          'tag--small': this.size === 'small',
          'tag--medium': this.size === 'medium',
          'tag--large': this.size === 'large',

          // Modifers
          'tag--pill': this.pill,
          'tag--clearable': this.clearable,
        }}
      >
        <span part="content" class="tag__content">
          <slot />
        </span>

        {this.clearable && (
          <sl-icon-button
            part="clear-button"
            name="x"
            class="tag__clear"
            onClick={this.handleClearClick}
          />
        )}
      </span>
    );
  }
}
