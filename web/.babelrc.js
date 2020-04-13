module.exports = {
  extends: '../babel.config.js',
  plugins: [
    [
      'i18next-extract',
      {
        keyAsDefaultValue: true,
        locales: ['en', 'fr'],
        outputPath: 'src/locales/{{locale}}/{{ns}}.json',
      },
    ],
  ],
}
