const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  i18n: {
    locales: ['pt-BR', 'en', 'es'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
});
