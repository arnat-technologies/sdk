import { newSpecPage } from '@stencil/core/testing';
import { ADropdown } from './a-dropdown';

describe('a-dropdown', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ADropdown],
      html: '<a-dropdown></a-dropdown>'
    });
    expect(root).toEqualHtml(`
      <a-dropdown>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-dropdown>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ADropdown],
      html: `<a-dropdown first="Stencil" last="'Don't call me a framework' JS"></a-dropdown>`
    });
    expect(root).toEqualHtml(`
      <a-dropdown first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-dropdown>
    `);
  });
});
