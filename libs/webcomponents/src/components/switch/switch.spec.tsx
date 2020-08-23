import { newSpecPage } from '@stencil/core/testing';
import { Switch } from './switch';

describe('a-switch', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Switch],
      html: '<a-switch></a-switch>',
    });
    expect(root).toEqualHtml(`
      <a-switch>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-switch>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Switch],
      html: `<a-switch first="Stencil" last="'Don't call me a framework' JS"></a-switch>`,
    });
    expect(root).toEqualHtml(`
      <a-switch first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-switch>
    `);
  });
});
