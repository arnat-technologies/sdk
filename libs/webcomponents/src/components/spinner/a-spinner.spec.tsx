import { newSpecPage } from '@stencil/core/testing';
import { ASpinner } from './a-spinner';

describe('a-spinner', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ASpinner],
      html: '<a-spinner></a-spinner>'
    });
    expect(root).toEqualHtml(`
      <a-spinner>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-spinner>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ASpinner],
      html: `<a-spinner first="Stencil" last="'Don't call me a framework' JS"></a-spinner>`
    });
    expect(root).toEqualHtml(`
      <a-spinner first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-spinner>
    `);
  });
});
