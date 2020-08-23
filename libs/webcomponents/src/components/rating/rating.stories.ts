import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Rating = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-rating first="${firstName}" middle="${middleName}" last="${lastName}"></a-rating>`;
};
