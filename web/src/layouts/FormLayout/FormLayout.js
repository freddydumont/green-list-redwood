import { Container, Box } from 'theme-ui'
import { AnimatePresence } from 'framer-motion'

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
            {/* initial: see https://www.framer.com/api/motion/animate-presence/#suppressing-initial-animations */}
            <AnimatePresence initial={false}>{children}</AnimatePresence>
          </>
        </Container>
      </Box>
    </GlobalLayout>
  )
}

export default FormLayout
