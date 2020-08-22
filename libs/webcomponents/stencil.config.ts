import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

const angularValueAccessorBindings = [];

export const config: Config = {
  namespace: 'webcomponents',
  taskQueue: 'async',
  globalStyle: 'src/styles/shoelace/shoelace.scss',
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
    reactOutputTarget({
      componentCorePackage: '@arnat-sdk/webcomponents',
      proxiesFile:
        '../../../libs/webcomponents-react/src/generated/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@arnat-sdk/webcomponents',
      directivesProxyFile:
        '../../../libs/webcomponents-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],

  plugins: [
    sass({
      includePaths: ['./node_modules', './src/styles'],
    }),
  ],
};
