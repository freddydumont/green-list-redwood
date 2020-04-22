import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ThemeProvider } from 'theme-ui'
import { initReactI18next } from 'react-i18next'
import { initI18n } from 'intl'

import Routes from 'src/Routes'

import theme from './theme'
import loadDevTools from './devtools/load'

import 'tailwindcss/dist/base.min.css'

initI18n(initReactI18next)

loadDevTools(() => {
  ReactDOM.render(
    <FatalErrorBoundary page={FatalErrorPage}>
      <ThemeProvider theme={theme}>
        <RedwoodProvider>
          <Routes />
        </RedwoodProvider>
      </ThemeProvider>
    </FatalErrorBoundary>,
    document.getElementById('redwood-app')
  )
})
