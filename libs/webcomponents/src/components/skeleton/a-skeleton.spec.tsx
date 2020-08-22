import { newSpecPage } from '@stencil/core/testing';
import { ASkeleton } from './a-skeleton';

describe('a-skeleton', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ASkeleton],
      html: '<a-skeleton></a-skeleton>'
    });
    expect(root).toEqualHtml(`
      <a-skeleton>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-skeleton>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ASkeleton],
      html: `<a-skeleton first="Stencil" last="'Don't call me a framework' JS"></a-skeleton>`
    });
    expect(root).toEqualHtml(`
      <a-skeleton first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-skeleton>
    `);
  });
});
