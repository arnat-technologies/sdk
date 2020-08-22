import { newSpecPage } from '@stencil/core/testing';
import { ADetails } from './a-details';

describe('a-details', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ADetails],
      html: '<a-details></a-details>'
    });
    expect(root).toEqualHtml(`
      <a-details>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-details>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ADetails],
      html: `<a-details first="Stencil" last="'Don't call me a framework' JS"></a-details>`
    });
    expect(root).toEqualHtml(`
      <a-details first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-details>
    `);
  });
});
