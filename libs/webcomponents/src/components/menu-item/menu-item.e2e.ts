import { newE2EPage } from '@stencil/core/testing';

describe('a-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-menu-item></a-menu-item>');
    const element = await page.find('a-menu-item');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-menu-item></a-menu-item>');
    const component = await page.find('a-menu-item');
    const element = await page.find('a-menu-item >>> div');
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
