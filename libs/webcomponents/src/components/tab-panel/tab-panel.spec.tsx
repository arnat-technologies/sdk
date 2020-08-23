import { newSpecPage } from '@stencil/core/testing';
import { TabPanel } from './tab-panel';

describe('a-tab-panel', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TabPanel],
      html: '<a-tab-panel></a-tab-panel>',
    });
    expect(root).toEqualHtml(`
      <a-tab-panel>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-tab-panel>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TabPanel],
      html: `<a-tab-panel first="Stencil" last="'Don't call me a framework' JS"></a-tab-panel>`,
    });
    expect(root).toEqualHtml(`
      <a-tab-panel first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-tab-panel>
    `);
  });
});
