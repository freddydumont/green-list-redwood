import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ThemeProvider } from 'theme-ui'

import Routes from 'src/Routes'

import theme from './theme'
import loadDevTools from './devtools/load'

import './i18n'

import 'tailwindcss/dist/base.css'

loadDevTools(() => {
  ReactDOM.render(
    <FatalErrorBoundary page={FatalErrorPage}>
      <Suspense fallback={null}>
        <ThemeProvider theme={theme}>
          <RedwoodProvider>
            <Routes />
          </RedwoodProvider>
        </ThemeProvider>
      </Suspense>
    </FatalErrorBoundary>,
    document.getElementById('redwood-app')
  )
})
