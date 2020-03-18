import { Link, routes } from '@redwoodjs/router'
import { useColorMode, Container, Flex, NavLink, Button } from 'theme-ui'

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    // see theme.layout.container for styles
    <Container as="header">
      <Flex as="nav">
        <NavLink as={Link} to={routes.home()} p={2} pl={0}>
          Home
        </NavLink>
        <NavLink as={Link} to={routes.styleGuide()} p={2}>
          Style Guide
        </NavLink>
        <Button
          ml="auto"
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
    </Container>
  )
}

export default Header
