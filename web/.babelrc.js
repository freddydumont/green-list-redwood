module.exports = {
  extends: '../babel.config.js',
  plugins: [
    [
      'i18next-extract',
      {
        keyAsDefaultValue: true,
        locales: ['en', 'fr'],
        outputPath: '../packages/intl/src/locales/{{locale}}/{{ns}}.json',
      },
    ],
  ],
}
