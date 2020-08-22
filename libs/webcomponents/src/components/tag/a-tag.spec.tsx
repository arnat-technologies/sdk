import { newSpecPage } from '@stencil/core/testing';
import { ATag } from './a-tag';

describe('a-tag', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ATag],
      html: '<a-tag></a-tag>'
    });
    expect(root).toEqualHtml(`
      <a-tag>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-tag>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ATag],
      html: `<a-tag first="Stencil" last="'Don't call me a framework' JS"></a-tag>`
    });
    expect(root).toEqualHtml(`
      <a-tag first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-tag>
    `);
  });
});
