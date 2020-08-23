import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const ButtonGroup = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-button-group first="${firstName}" middle="${middleName}" last="${lastName}"></a-button-group>`;
};
