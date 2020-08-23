import { newSpecPage } from '@stencil/core/testing';
import { ColorPicker } from './color-picker';

describe('a-color-picker', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ColorPicker],
      html: '<a-color-picker></a-color-picker>',
    });
    expect(root).toEqualHtml(`
      <a-color-picker>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-color-picker>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ColorPicker],
      html: `<a-color-picker first="Stencil" last="'Don't call me a framework' JS"></a-color-picker>`,
    });
    expect(root).toEqualHtml(`
      <a-color-picker first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-color-picker>
    `);
  });
});
