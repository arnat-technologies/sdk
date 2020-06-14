import ts from '@wessberg/rollup-plugin-ts';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.main.replace('.js', '.min.js'), format: 'cjs', sourcemap: false },
    { file: pkg.module, format: 'esm', sourcemap: true, freeze: false },
    {
      file: pkg.module.replace('.js', '.min.js'),
      format: 'esm',
      sourcemap: false,
      freeze: false,
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    preserveShebangs(),
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    ts({
      transpiler: 'babel',
    }),
    terser({
      include: [/^.+\.min\.js$/],
      exclude: ['some*'],
    }),
  ],
};
