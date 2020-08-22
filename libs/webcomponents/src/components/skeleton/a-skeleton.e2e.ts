import { newE2EPage } from '@stencil/core/testing';

describe('a-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-skeleton></a-skeleton>');
    const element = await page.find('a-skeleton');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-skeleton></a-skeleton>');
    const component = await page.find('a-skeleton');
    const element = await page.find('a-skeleton >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
