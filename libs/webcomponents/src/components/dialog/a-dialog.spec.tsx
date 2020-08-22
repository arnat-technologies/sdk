import { newSpecPage } from '@stencil/core/testing';
import { ADialog } from './a-dialog';

describe('a-dialog', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ADialog],
      html: '<a-dialog></a-dialog>'
    });
    expect(root).toEqualHtml(`
      <a-dialog>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-dialog>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ADialog],
      html: `<a-dialog first="Stencil" last="'Don't call me a framework' JS"></a-dialog>`
    });
    expect(root).toEqualHtml(`
      <a-dialog first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-dialog>
    `);
  });
});
