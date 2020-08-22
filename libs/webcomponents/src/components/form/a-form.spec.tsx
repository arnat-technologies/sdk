import { newSpecPage } from '@stencil/core/testing';
import { AForm } from './a-form';

describe('a-form', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [AForm],
      html: '<a-form></a-form>'
    });
    expect(root).toEqualHtml(`
      <a-form>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-form>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [AForm],
      html: `<a-form first="Stencil" last="'Don't call me a framework' JS"></a-form>`
    });
    expect(root).toEqualHtml(`
      <a-form first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-form>
    `);
  });
});
