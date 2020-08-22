import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const AMenuItem = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-menu-item first="${firstName}" middle="${middleName}" last="${lastName}"></a-menu-item>`;
};
