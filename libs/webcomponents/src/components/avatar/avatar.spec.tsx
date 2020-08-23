import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from './avatar';

describe('a-avatar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: '<a-avatar></a-avatar>',
    });
    expect(root).toEqualHtml(`
      <a-avatar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-avatar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: `<a-avatar first="Stencil" last="'Don't call me a framework' JS"></a-avatar>`,
    });
    expect(root).toEqualHtml(`
      <a-avatar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-avatar>
    `);
  });
});
