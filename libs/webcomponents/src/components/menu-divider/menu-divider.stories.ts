import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const MenuDivider = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-menu-divider first="${firstName}" middle="${middleName}" last="${lastName}"></a-menu-divider>`;
};
