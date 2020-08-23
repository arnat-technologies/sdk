import { newSpecPage } from '@stencil/core/testing';
import { Range } from './range';

describe('a-range', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Range],
      html: '<a-range></a-range>',
    });
    expect(root).toEqualHtml(`
      <a-range>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-range>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Range],
      html: `<a-range first="Stencil" last="'Don't call me a framework' JS"></a-range>`,
    });
    expect(root).toEqualHtml(`
      <a-range first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-range>
    `);
  });
});
