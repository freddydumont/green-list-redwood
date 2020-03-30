import { Container, Box } from 'theme-ui'

import Header from 'src/components/Header/Header'

const FormLayout = ({ children }) => {
  return (
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
  )
}

export default FormLayout
