import { newSpecPage } from '@stencil/core/testing';
import { ProgressRing } from './progress-ring';

describe('a-progress-ring', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ProgressRing],
      html: '<a-progress-ring></a-progress-ring>',
    });
    expect(root).toEqualHtml(`
      <a-progress-ring>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-progress-ring>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ProgressRing],
      html: `<a-progress-ring first="Stencil" last="'Don't call me a framework' JS"></a-progress-ring>`,
    });
    expect(root).toEqualHtml(`
      <a-progress-ring first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-progress-ring>
    `);
  });
});
