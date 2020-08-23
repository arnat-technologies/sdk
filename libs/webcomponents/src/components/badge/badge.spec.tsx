import { newSpecPage } from '@stencil/core/testing';
import { Badge } from './badge';

describe('a-badge', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: '<a-badge></a-badge>',
    });
    expect(root).toEqualHtml(`
      <a-badge>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-badge>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: `<a-badge first="Stencil" last="'Don't call me a framework' JS"></a-badge>`,
    });
    expect(root).toEqualHtml(`
      <a-badge first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-badge>
    `);
  });
});
