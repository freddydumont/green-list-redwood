import { Container, Box } from 'theme-ui'

import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import NavBar from 'src/components/NavBar/NavBar'

const FormLayout = ({ children }) => {
  return (
    <GlobalLayout>
      <Box bg="formBackground">
        <Container
          as="main"
          sx={{
            position: 'relative',
            minHeight: '100vh',
          }}
        >
          <>
            <Box pb={6}>
              <NavBar />
            </Box>
            {children}
          </>
        </Container>
      </Box>
    </GlobalLayout>
  )
}

export default FormLayout
