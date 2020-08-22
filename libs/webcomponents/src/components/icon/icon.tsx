import {
  State,
  Component,
  h,
  Prop,
  Host,
  Watch,
  Event,
  Element,
  EventEmitter,
  getAssetPath,
} from '@stencil/core';

import requestIcon from './request';

const parser = new DOMParser();

@Component({
  tag: 'a-icon',
  styleUrl: 'icon.scss',
  scoped: true,
  assetsDirs: ['icons'],
})
export class Icon {
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

  /** */
  @State() svg: string;

  /**
   * 4. Public Property API
   */

  /** An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. */
  @Prop() label: string;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** The name of the icon to draw. */
  @Prop() name: string;

  /** An external URL of an SVG file. */
  @Prop() src: string;

  @Watch('name')
  @Watch('src')
  handleChange() {
    this.setIcon();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the icon has loaded. */
  @Event() aLoad: EventEmitter;

  /** Emitted when the icon failed to load. */
  @Event() aError: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {}
  disconnectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {
    this.setIcon();
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

  /**
   * 9. Local methods
   */

  getLabel() {
    let label = '';

    if (this.label) {
      label = this.label;
    } else if (this.name) {
      label = this.name.replace(/-/g, ' ');
    } else if (this.src) {
      label = this.src
        .replace(/.*\//, '')
        .replace(/-/g, ' ')
        .replace(/\.svg/i, '');
    }

    return label;
  }

  setIcon() {
    const url = this.name ? getAssetPath(`./icons/${this.name}.svg`) : this.src;
    requestIcon(url)
      .then((source) => {
        const doc = parser.parseFromString(source, 'text/html');
        const svg = doc.body.querySelector('svg');

        if (svg) {
          this.svg = svg.outerHTML;
          this.aLoad.emit();
        } else {
          this.svg = '';
          this.aError.emit();
        }
      })
      .catch((error) => this.aError.emit(error));
  }

  /**
   * 10. render() function
   */
  render() {
    return (
      <Host>
        <div
          part="base"
          class="icon"
          role="img"
          aria-label={this.getLabel()}
          innerHTML={this.svg}
        ></div>
      </Host>
    );
  }
}
