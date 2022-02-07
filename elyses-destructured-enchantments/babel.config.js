module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: '3.20',
      },

    ],
    [
      '@babel/preset-react',
      {"runtime": "automatic"}
    ],

  ],
  plugins: ['@babel/plugin-syntax-bigint'],
};
