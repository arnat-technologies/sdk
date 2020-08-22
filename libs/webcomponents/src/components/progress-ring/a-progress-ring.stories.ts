import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const AProgressRing = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-progress-ring first="${firstName}" middle="${middleName}" last="${lastName}"></a-progress-ring>`;
};
