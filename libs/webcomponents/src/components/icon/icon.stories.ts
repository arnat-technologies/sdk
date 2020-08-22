import { text } from '@storybook/addon-knobs';

export default {
  title: 'Atoms',
};

export const Icon = () => {
  const name = text('Name of icon', 'endgame');
  return `<a-icon name="${name}" ></a-icon>`;
};
