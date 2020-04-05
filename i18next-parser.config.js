module.exports = {
  createOldCatalogs: true,
  indentation: 2,
  lexers: {
    js: ['JsxLexer'],
    ts: ['JsxLexer'],
    jsx: ['JsxLexer'],
    tsx: ['JsxLexer'],
    default: ['JsxLexer'],
  },
  locales: ['en', 'fr'],
  output: 'web/public/locales/$LOCALE/$NAMESPACE.json',
  input: ['web/src/**/*.{js,jsx,ts,tsx}'],
  useKeysAsDefaultValue: true,
  verbose: true,
}
