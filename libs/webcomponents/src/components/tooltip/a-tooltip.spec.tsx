import { newSpecPage } from '@stencil/core/testing';
import { ATooltip } from './a-tooltip';

describe('a-tooltip', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ATooltip],
      html: '<a-tooltip></a-tooltip>'
    });
    expect(root).toEqualHtml(`
      <a-tooltip>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-tooltip>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ATooltip],
      html: `<a-tooltip first="Stencil" last="'Don't call me a framework' JS"></a-tooltip>`
    });
    expect(root).toEqualHtml(`
      <a-tooltip first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-tooltip>
    `);
  });
});
