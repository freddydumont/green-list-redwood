module.exports = {
  extends: '../babel.config.js',
  plugins: [
    [
      'i18next-extract',
      {
        keyAsDefaultValue: true,
        locales: ['en', 'fr'],
        outputPath: 'public/locales/{{locale}}/{{ns}}.json',
      },
    ],
  ],
}
