import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Radio = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-radio first="${firstName}" middle="${middleName}" last="${lastName}"></a-radio>`;
};
