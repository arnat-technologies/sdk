import { newSpecPage } from '@stencil/core/testing';
import { IconButton } from './icon-button';

describe('a-icon-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [IconButton],
      html: '<a-icon-button></a-icon-button>',
    });
    expect(root).toEqualHtml(`
      <a-icon-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-icon-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [IconButton],
      html: `<a-icon-button first="Stencil" last="'Don't call me a framework' JS"></a-icon-button>`,
    });
    expect(root).toEqualHtml(`
      <a-icon-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-icon-button>
    `);
  });
});
