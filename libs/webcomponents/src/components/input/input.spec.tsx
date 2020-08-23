import { newSpecPage } from '@stencil/core/testing';
import { Input } from './input';

describe('a-icon-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<a-icon-input></a-icon-input>',
    });
    expect(root).toEqualHtml(`
      <a-icon-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-icon-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: `<a-icon-input first="Stencil" last="'Don't call me a framework' JS"></a-icon-input>`,
    });
    expect(root).toEqualHtml(`
      <a-icon-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-icon-input>
    `);
  });
});
