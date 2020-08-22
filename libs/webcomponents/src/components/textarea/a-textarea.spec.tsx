import { newSpecPage } from '@stencil/core/testing';
import { ATextarea } from './a-textarea';

describe('a-textarea', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ATextarea],
      html: '<a-textarea></a-textarea>'
    });
    expect(root).toEqualHtml(`
      <a-textarea>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-textarea>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ATextarea],
      html: `<a-textarea first="Stencil" last="'Don't call me a framework' JS"></a-textarea>`
    });
    expect(root).toEqualHtml(`
      <a-textarea first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-textarea>
    `);
  });
});
