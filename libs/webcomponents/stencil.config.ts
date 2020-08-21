import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'webcomponents',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/webcomponents/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/webcomponents/www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
