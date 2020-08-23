import { newSpecPage } from '@stencil/core/testing';
import { ProgressBar } from './a-progress-bar';

describe('a-progress-bar', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ProgressBar],
      html: '<a-progress-bar></a-progress-bar>'
    });
    expect(root).toEqualHtml(`
      <a-progress-bar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </a-progress-bar>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ProgressBar],
      html: `<a-progress-bar first="Stencil" last="'Don't call me a framework' JS"></a-progress-bar>`
    });
    expect(root).toEqualHtml(`
      <a-progress-bar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </a-progress-bar>
    `);
  });
});
