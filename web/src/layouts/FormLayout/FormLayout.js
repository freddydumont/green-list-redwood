import { Container } from 'theme-ui'

import Header from 'src/components/Header/Header'

const FormLayout = ({ children }) => {
  return (
    <>
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
    </>
  )
}

export default FormLayout
