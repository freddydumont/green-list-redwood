import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// for now, all translations are loaded with the app
// this could change if we find a better solution
// or if redwood provides some SSG functionality in the future
import en from './src/locales/en/index'
import fr from './src/locales/fr/index'

/**
 * @param {*} react `initReactI18next` instance
 */
function initI18n(react) {
  i18n
    .use(LanguageDetector)
    // connect with React
    .use(react)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      resources: {
        en,
        fr,
      },
      debug: process.env.NODE_ENV === 'development',
      fallbackLng: 'en',
      whitelist: ['en', 'fr'],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      react: {
        useSuspense: false,
      },
    })
}

export { initI18n }
