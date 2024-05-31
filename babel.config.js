module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@services': './src/services',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@api': './src/api',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
