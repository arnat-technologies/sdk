import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from './menu-item';

describe('a-menu-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MenuItem],
      html: '<a-menu-item></a-menu-item>',
    });
    expect(root).toEqualHtml(`
      <a-menu-item>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-menu-item>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MenuItem],
      html: `<a-menu-item first="Stencil" last="'Don't call me a framework' JS"></a-menu-item>`,
    });
    expect(root).toEqualHtml(`
      <a-menu-item first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-menu-item>
    `);
  });
});
