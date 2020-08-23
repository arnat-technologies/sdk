import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Drawer = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-drawer first="${firstName}" middle="${middleName}" last="${lastName}"></a-drawer>`;
};
