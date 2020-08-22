import { newSpecPage } from '@stencil/core/testing';
import { ARating } from './a-rating';

describe('a-rating', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ARating],
      html: '<a-rating></a-rating>'
    });
    expect(root).toEqualHtml(`
      <a-rating>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-rating>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ARating],
      html: `<a-rating first="Stencil" last="'Don't call me a framework' JS"></a-rating>`
    });
    expect(root).toEqualHtml(`
      <a-rating first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-rating>
    `);
  });
});
