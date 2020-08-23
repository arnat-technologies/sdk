import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  Watch,
  h,
} from '@stencil/core';

@Component({
  tag: 'a-menu-item',
  styleUrl: 'menu-item.scss',
  scoped: true,
})
export class MenuItem {
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

  /** Set to true to draw the item in a checked state. */
  @Prop({ reflect: true }) checked = false;

  /** A unique value to store in the menu item. */
  @Prop({ reflect: true }) value = '';

  /** Set to true to draw the menu item in a disabled state. */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** Set to true to draw the menu item in an active state. */
  @Prop({ reflect: true }) active = false;

  @Watch('active')
  handleActiveChange() {
    this.active ? this.slActivate.emit() : this.slDeactivate.emit();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the menu item becomes active. */
  @Event() slActivate: EventEmitter;

  /** Emitted when the menu item becomes inactive. */
  @Event() slDeactivate: EventEmitter;

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
          'menu-item': true,
          'menu-item--checked': this.checked,
          'menu-item--active': this.active,
          'menu-item--disabled': this.disabled,
        }}
        role="menuitem"
        aria-checked={this.checked}
        aria-disabled={this.disabled}
        aria-selected={this.active}
      >
        <span part="checked-icon" class="menu-item__check">
          <a-icon name="check2" />
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix" />
        </span>

        <span part="label" class="menu-item__label">
          <slot />
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix" />
        </span>
      </div>
    );
  }
}
