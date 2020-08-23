import { newSpecPage } from '@stencil/core/testing';
import { Animate } from './animation';

describe('a-animation', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Animate],
      html: '<a-animation></a-animation>',
    });
    expect(root).toEqualHtml(`
      <a-animation>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-animation>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Animate],
      html: `<a-animation first="Stencil" last="'Don't call me a framework' JS"></a-animation>`,
    });
    expect(root).toEqualHtml(`
      <a-animation first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-animation>
    `);
  });
});
