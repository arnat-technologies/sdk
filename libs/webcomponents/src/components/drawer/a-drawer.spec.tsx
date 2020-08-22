import { newSpecPage } from '@stencil/core/testing';
import { ADrawer } from './a-drawer';

describe('a-drawer', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ADrawer],
      html: '<a-drawer></a-drawer>'
    });
    expect(root).toEqualHtml(`
      <a-drawer>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-drawer>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ADrawer],
      html: `<a-drawer first="Stencil" last="'Don't call me a framework' JS"></a-drawer>`
    });
    expect(root).toEqualHtml(`
      <a-drawer first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-drawer>
    `);
  });
});
