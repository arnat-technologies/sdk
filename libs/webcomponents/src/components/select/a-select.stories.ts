import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const ASelect = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-select first="${firstName}" middle="${middleName}" last="${lastName}"></a-select>`;
};
