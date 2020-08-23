import { newSpecPage } from '@stencil/core/testing';
import { Select } from './select';

describe('a-select', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Select],
      html: '<a-select></a-select>',
    });
    expect(root).toEqualHtml(`
      <a-select>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-select>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Select],
      html: `<a-select first="Stencil" last="'Don't call me a framework' JS"></a-select>`,
    });
    expect(root).toEqualHtml(`
      <a-select first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-select>
    `);
  });
});
