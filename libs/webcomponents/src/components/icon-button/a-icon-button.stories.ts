import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const AIconButton = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-icon-button first="${firstName}" middle="${middleName}" last="${lastName}"></a-icon-button>`;
};
