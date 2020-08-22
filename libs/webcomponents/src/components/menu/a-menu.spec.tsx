import { newSpecPage } from '@stencil/core/testing';
import { AMenu } from './a-menu';

describe('a-menu', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [AMenu],
      html: '<a-menu></a-menu>'
    });
    expect(root).toEqualHtml(`
      <a-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-menu>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [AMenu],
      html: `<a-menu first="Stencil" last="'Don't call me a framework' JS"></a-menu>`
    });
    expect(root).toEqualHtml(`
      <a-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-menu>
    `);
  });
});
