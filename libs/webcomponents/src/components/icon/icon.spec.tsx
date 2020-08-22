import { newSpecPage } from '@stencil/core/testing';
import { AIcon } from './icon';

describe('a-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AIcon],
      html: '<a-icon></a-icon>',
    });
    expect(root).toEqualHtml(`
      <a-icon>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-icon>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AIcon],
      html: `<a-icon first="Stencil" last="'Don't call me a framework' JS"></a-icon>`,
    });
    expect(root).toEqualHtml(`
      <a-icon first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-icon>
    `);
  });
});
