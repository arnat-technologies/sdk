import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Switch = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-switch first="${firstName}" middle="${middleName}" last="${lastName}"></a-switch>`;
};
