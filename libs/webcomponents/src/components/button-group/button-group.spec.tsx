import { newSpecPage } from '@stencil/core/testing';
import { ButtonGroup } from './button-group';

describe('a-button-group', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ButtonGroup],
      html: '<a-button-group></a-button-group>',
    });
    expect(root).toEqualHtml(`
      <a-button-group>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-button-group>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ButtonGroup],
      html: `<a-button-group first="Stencil" last="'Don't call me a framework' JS"></a-button-group>`,
    });
    expect(root).toEqualHtml(`
      <a-button-group first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-button-group>
    `);
  });
});
