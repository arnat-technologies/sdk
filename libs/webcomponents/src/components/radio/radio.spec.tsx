import { newSpecPage } from '@stencil/core/testing';
import { Radio } from './a-radio';

describe('a-radio', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Radio],
      html: '<a-radio></a-radio>',
    });
    expect(root).toEqualHtml(`
      <a-radio>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-radio>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Radio],
      html: `<a-radio first="Stencil" last="'Don't call me a framework' JS"></a-radio>`,
    });
    expect(root).toEqualHtml(`
      <a-radio first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-radio>
    `);
  });
});
