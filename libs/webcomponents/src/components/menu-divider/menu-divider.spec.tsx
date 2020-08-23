import { newSpecPage } from '@stencil/core/testing';
import { MenuDivider } from './menu-divider';

describe('a-menu-divider', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [MenuDivider],
      html: '<a-menu-divider></a-menu-divider>'
    });
    expect(root).toEqualHtml(`
      <a-menu-divider>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-menu-divider>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [MenuDivider],
      html: `<a-menu-divider first="Stencil" last="'Don't call me a framework' JS"></a-menu-divider>`
    });
    expect(root).toEqualHtml(`
      <a-menu-divider first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-menu-divider>
    `);
  });
});
