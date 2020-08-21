import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Avatar = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-avatar first="${firstName}" middle="${middleName}" last="${lastName}"></a-avatar>`;
};
