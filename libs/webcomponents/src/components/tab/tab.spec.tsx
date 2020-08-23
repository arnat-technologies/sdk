import { newSpecPage } from '@stencil/core/testing';
import { Tab } from './tab';

describe('a-tab', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Tab],
      html: '<a-tab></a-tab>',
    });
    expect(root).toEqualHtml(`
      <a-tab>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-tab>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Tab],
      html: `<a-tab first="Stencil" last="'Don't call me a framework' JS"></a-tab>`,
    });
    expect(root).toEqualHtml(`
      <a-tab first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-tab>
    `);
  });
});
