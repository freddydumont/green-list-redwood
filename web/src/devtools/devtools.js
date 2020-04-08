import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Box, Label, Checkbox, Button } from 'theme-ui'

import theme from '../theme'

import featureToggles, { enable, disable } from './featureToggles'

function install() {
  window.devToolsEnabled = true
  // load local dev tools if it's there
  // NOTE: this is using some webpack-specific features.
  const requireDevToolsLocal = require.context(
    './',
    false,
    /dev-tools\.local\.js/
  )
  const local = requireDevToolsLocal.keys()[0]
  let LocalDevTools
  if (local) {
    LocalDevTools = requireDevToolsLocal(local).default
  }
  LocalDevTools = LocalDevTools || (() => null)

  function FormValidationTool() {
    const [disableFormValidation, setDisableFormValidation] = React.useState(
      featureToggles.disableFormValidation
    )

    React.useEffect(() => {
      if (disableFormValidation) {
        enable('disableFormValidation')
      } else {
        disable('disableFormValidation')
      }
    }, [disableFormValidation])

    return (
      <Label mb={3}>
        <Checkbox
          defaultChecked={disableFormValidation}
          onChange={(e) => setDisableFormValidation(e.target.checked)}
        />
        Skip form validation
      </Label>
    )
  }

  function DevTools() {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          background: 'black',
          opacity: 0.4,
          color: 'white',
          padding: '20px',
          height: '60px',
          width: '60px',
          transition: 'all 0.3s',
          '.tools': {
            display: 'none',
            py: 3,
          },

          '&:hover': {
            height: '300px',
            width: '100%',
            opacity: 0.9,
            '.tools': {
              display: 'block',
            },
          },
        }}
      >
        <div>🛠</div>
        <div className="tools">
          <LocalDevTools />
          <FormValidationTool />
          <Button variant="small" as="a" href="/style-guide">
            Go to style guide
          </Button>
        </div>
      </Box>
    )
  }

  // add dev tools UI to the page
  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <DevTools />
    </ThemeProvider>,
    devToolsRoot
  )
}

export { install }
