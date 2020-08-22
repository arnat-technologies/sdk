import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-select',
  styleUrl: 'a-select.scss',
  shadow: true,
})
export class ASelect {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return `${this.first} ${this.middle}, ${this.last}`;
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
