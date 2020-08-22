import { newSpecPage } from '@stencil/core/testing';
import { AMenuLabel } from './a-menu-label';

describe('a-menu-label', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [AMenuLabel],
      html: '<a-menu-label></a-menu-label>'
    });
    expect(root).toEqualHtml(`
      <a-menu-label>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-menu-label>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [AMenuLabel],
      html: `<a-menu-label first="Stencil" last="'Don't call me a framework' JS"></a-menu-label>`
    });
    expect(root).toEqualHtml(`
      <a-menu-label first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-menu-label>
    `);
  });
});
