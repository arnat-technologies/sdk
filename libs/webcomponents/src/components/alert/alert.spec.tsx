import { newSpecPage } from '@stencil/core/testing';
import { Alert } from './alert';

describe('a-alert', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Alert],
      html: '<a-alert></a-alert>',
    });
    expect(root).toEqualHtml(`
      <a-alert>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-alert>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Alert],
      html: `<a-alert first="Stencil" last="'Don't call me a framework' JS"></a-alert>`,
    });
    expect(root).toEqualHtml(`
      <a-alert first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-alert>
    `);
  });
});
