import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const config = {
  dir: 'dist',
  sanitizeFileName: (f) => f.includes('tXml') ? f.toLowerCase() : f,
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        ...config,
        format: 'cjs',
        entryFileNames: '[name].cjs',
        exports: 'named',
      },
      {
        ...config,
        format: 'esm',
        entryFileNames: '[name].mjs',
      },
    ],
    external: ['node:stream'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
  {
    input: 'src/tXml.ts',
    output: [
      {
        ...config,
        format: 'cjs',
        entryFileNames: '[name].cjs',
        exports: 'named',
      },
      {
        ...config,
        format: 'esm',
        entryFileNames: '[name].mjs',
      },
      {
        file: 'dist/txml.min.js',
        format: 'umd',
        name: 'txml',
      }
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ],
  },
  {
    input: 'src/transformStream.ts',
    output: [
      {
        ...config,
        format: 'cjs',
        entryFileNames: '[name].cjs',
        exports: 'named',
      },
      {
        ...config,
        format: 'esm',
        entryFileNames: '[name].mjs',
      },
    ],
    external: ['node:stream'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  }
];
