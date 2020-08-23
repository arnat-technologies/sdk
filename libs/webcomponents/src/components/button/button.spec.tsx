import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('a-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<a-button></a-button>',
    });
    expect(root).toEqualHtml(`
      <a-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<a-button first="Stencil" last="'Don't call me a framework' JS"></a-button>`,
    });
    expect(root).toEqualHtml(`
      <a-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-button>
    `);
  });
});
