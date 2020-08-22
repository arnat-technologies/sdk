import { newSpecPage } from '@stencil/core/testing';
import { ACheckbox } from './a-checkbox';

describe('a-checkbox', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ACheckbox],
      html: '<a-checkbox></a-checkbox>'
    });
    expect(root).toEqualHtml(`
      <a-checkbox>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-checkbox>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ACheckbox],
      html: `<a-checkbox first="Stencil" last="'Don't call me a framework' JS"></a-checkbox>`
    });
    expect(root).toEqualHtml(`
      <a-checkbox first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-checkbox>
    `);
  });
});
