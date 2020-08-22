import { newSpecPage } from '@stencil/core/testing';
import { ATabGroup } from './a-tab-group';

describe('a-tab-group', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ATabGroup],
      html: '<a-tab-group></a-tab-group>'
    });
    expect(root).toEqualHtml(`
      <a-tab-group>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-tab-group>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ATabGroup],
      html: `<a-tab-group first="Stencil" last="'Don't call me a framework' JS"></a-tab-group>`
    });
    expect(root).toEqualHtml(`
      <a-tab-group first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-tab-group>
    `);
  });
});
