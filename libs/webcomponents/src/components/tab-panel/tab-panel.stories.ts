import { text } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TabPanel = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-tab-panel first="${firstName}" middle="${middleName}" last="${lastName}"></a-tab-panel>`;
};
