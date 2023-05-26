const { defineConfig } = require('@vue/cli-service');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: './public/3.ico',
        favicons: {
          appName: 'Schokett.de',
          appDescription: 'ProjectVue',
          developerName: 'Skrollan Elena Zimmermann',
          developerURL: null, // Optional
          background: '#ffffff',
          theme_color: '#ffffff',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: true,
            windows: true,
            yandex: true,
          },
        },
      }),
    ],
  },
});

