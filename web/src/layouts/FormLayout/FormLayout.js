import { Container, Box } from 'theme-ui'

import Header from 'src/components/Header/Header'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const FormLayout = ({ children }) => {
  return (
    <GlobalLayout>
      <Box bg="formBackground">
        <Header />
        <Container
          as="main"
          sx={{
            position: 'relative',
            minHeight: 'calc(100vh - 74px)', // 74px is header height
          }}
        >
          {children}
        </Container>
      </Box>
    </GlobalLayout>
  )
}

export default FormLayout
