import { Element, Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'a-skeleton',
  styleUrl: 'skeleton.scss',
  scoped: true,
})
export class Skeleton {
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

  /**
   * 4. Public Property API
   */

  /** Determines which effect the skeleton will use. */
  @Prop() effect: 'pulse' | 'sheen' | 'none' = 'sheen';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /**
   * 5. Events section
   */

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {}
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

  /**
   * 10. render() function
   */
  render() {
    return (
      <div
        part="base"
        class={{
          skeleton: true,
          'skeleton--pulse': this.effect === 'pulse',
          'skeleton--sheen': this.effect === 'sheen',
        }}
        aria-busy
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator" />
      </div>
    );
  }
}
