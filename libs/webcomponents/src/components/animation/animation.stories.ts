import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Animation = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-animation first="${firstName}" middle="${middleName}" last="${lastName}"></a-animation>`;
};
