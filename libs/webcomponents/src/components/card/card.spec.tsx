import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

describe('a-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Card],
      html: '<a-card></a-card>',
    });
    expect(root).toEqualHtml(`
      <a-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-card>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Card],
      html: `<a-card first="Stencil" last="'Don't call me a framework' JS"></a-card>`,
    });
    expect(root).toEqualHtml(`
      <a-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-card>
    `);
  });
});
