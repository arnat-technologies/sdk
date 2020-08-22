import { State, Component, h, Prop, Host, Element } from '@stencil/core';

@Component({
  tag: 'a-avatar',
  styleUrl: 'avatar.scss',
  scoped: true,
})
export class Avatar {
  /**
   * 1. Own Properties
   */

  /**
   * 2. Reference to host HTML element.
   */
  @Element() el: HTMLElement;

  /**
   * 3. State() variables
   */
  @State() hasError = false;

  /**
   * 4. Public Property API
   */

  /** The image source to use for the avatar. */
  @Prop() image = '';

  /** Alternative text for the image. */
  @Prop() alt = '';

  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  @Prop() initials = '';

  /** The shape of the avatar. */
  @Prop() shape: 'circle' | 'square' | 'rounded' = 'circle';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /**
   * 5. Events section
   */

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleImageError = this.handleImageError.bind(this);
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
  handleImageError() {
    this.hasError = true;
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <Host>
        <div
          part="base"
          class={{
            avatar: true,
            'avatar--circle': this.shape === 'circle',
            'avatar--rounded': this.shape === 'rounded',
            'avatar--square': this.shape === 'square',
          }}
          role="image"
          aria-label={this.alt}
        >
          {!this.initials && (
            <div part="icon" class="avatar__icon">
              <slot name="icon">
                <a-icon name="endgame" />
              </slot>
            </div>
          )}

          {this.initials && (
            <div part="initials" class="avatar__initials">
              {this.initials}
            </div>
          )}

          {this.image && !this.hasError && (
            <img
              part="image"
              class="avatar__image"
              src={this.image}
              onError={this.handleImageError}
            />
          )}
        </div>
      </Host>
    );
  }
}
