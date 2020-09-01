import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

// const purge = purgecss({
//   content: ['./src/**/*.tsx', './src/**/*.css', './src/index.html'],
//   whitelistPatterns: [/^~/, /^!/],
//   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// });

// https://stenciljs.com/docs/config
// const purge = purgecss({
//   // content: ['./src/**/*.tsx'],
//   content: ['./src/**/*.tsx', './src/index.html'],
//   whitelistPatterns: [/^~/, /^!/],
//   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// });

const angularValueAccessorBindings = [];

export const config: Config = {
  namespace: 'webcomponents',
  taskQueue: 'async',
  srcDir: 'src',
  // globalStyle: 'src/styles/shoelace/shoelace.scss',
  globalStyle: 'src/styles/tailwind.css',
  // globalStyle: 'src/global/app.css',
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
    // sass({
    //   // injectGlobalPaths: ['./src/styles/shoelace/shoelace.scss'],
    //   // injectGlobalPaths: ['src/styles/tailwind.css']
    //   includePaths: [
    //     './src/components',
    //     './src/styles',
    //     './node_modules',
    //     'libs',
    //     './libs',
    //     'src',
    //     './src',
    //   ],
    // }),
    sass({
      includePaths: [
        './src/components',
        './src/styles',
        './node_modules',
        'libs',
        './libs',
        'src',
        './src',
      ],
    }),
    postcss({
      plugins: [
        // require('postcss-import')({
        //   path: [],
        // }),
        tailwindcss('libs/webcomponents/tailwind.config.js'),
        autoprefixer({ cascade: false }),
        cssnano,
        // ...(process.env.NODE_ENV === 'production' ? [purge, cssnano()] : []),
        // ...[cssnano()],
      ],
    }),
  ],
};
