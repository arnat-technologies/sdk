import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const ColorPicker = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-color-picker first="${firstName}" middle="${middleName}" last="${lastName}"></a-color-picker>`;
};
