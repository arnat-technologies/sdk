import {
  State,
  Component,
  h,
  Prop,
  Host,
  Element,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'a-component',
  styleUrl: 'component.ios.css',
  scoped: true,
})
export class Component {
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
  componentShouldRender(newVal: any, oldVal: any, propName: string) {}
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
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
