const compile = esmodule => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: esmodule ? false : 'commonjs',
        useBuiltIns: false,
        targets: 'ios_saf >= 10, chrome >= 49',
      }
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true
      }
    ]
  ],
  plugins: [
    ['@vue/babel-plugin-jsx', { mergeProps: false }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ]
});

module.exports = {
  env: {
    development: { presets: ['@vue/cli-plugin-babel/preset'] },
    production: { presets: ['@vue/cli-plugin-babel/preset'] },
    commojs: compile(false),
    esmodule: compile(true)
  }
};
