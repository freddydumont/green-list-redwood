import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ThemeProvider } from 'theme-ui'

import Routes from 'src/Routes'

import theme from './theme'

import 'tailwindcss/dist/base.css'

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
