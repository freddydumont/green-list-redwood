/** @jsx jsx **/
import { jsx, Box, Flex, Link as NavLink } from 'theme-ui'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <FullNavBar {...{ setOpen }} />
      <MobileMenu {...{ isOpen, setOpen }} />
    </>
  )
}

export default NavBar

function FullNavBar({ setOpen }) {
  return (
    <Box pt={6} px={[4, 6, 8]}>
      <Flex
        as="nav"
        sx={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: ['space-between', null, null, 'flex-start'],
          height: [null, 10],
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            flexGrow: [1, null, null, 0],
            flexShrink: 0,
          }}
        >
          <Flex variant="flex.between" sx={{ width: ['full', null, 'auto'] }}>
            <NavLink variant="nav" href="#">
              <img
                sx={{ height: [8, 10], width: 'auto' }}
                src="/img/dhamma_wheel.svg"
                alt="dhamma wheel"
              />
            </NavLink>
            <Box
              sx={{
                mr: [-2],
                alignItems: 'center',
                display: ['flex', null, 'none'],
              }}
            >
              <MobileMenuButton
                path="M4 6h16M4 12h16M4 18h16"
                setOpen={() => setOpen(true)}
              />
            </Box>
          </Flex>
        </Flex>

        <FullWidthMenu />
      </Flex>
    </Box>
  )
}

function MobileMenuButton({ path, setOpen }) {
  return (
    <button
      onClick={setOpen}
      type="button"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        borderRadius: 'md',
        color: 'textMuted',
        transition: 'all 150ms ease-in-out',

        '&:hover': {
          color: 'textMutedHighlight',
          bg: 'light',
        },

        '&:focus': {
          outline: 'none',
          boxShadow: 'outline',
          color: 'textMutedHighlight',
          bg: 'light',
        },
      }}
    >
      <svg
        sx={{ height: 6, width: 6 }}
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={path}
        />
      </svg>
    </button>
  )
}

function MobileMenu({ isOpen, setOpen }) {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: {
        ease: 'easeIn',
        duration: 0.05,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.15,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            p: 2,
            transformOrigin: 'top right',
            display: [null, null, 'none'],
          }}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Box sx={{ borderRadius: 'lg', boxShadow: 'md' }}>
            <Box
              sx={{
                borderRadius: 'lg',
                boxShadow: 'xs',
                bg: 'background',
                overflow: 'hidden',
              }}
            >
              <Flex variant="flex.between" px={5} pt={4}>
                <div>
                  <img
                    sx={{ height: [8, 10], width: 'auto' }}
                    src="/img/dhamma_wheel.svg"
                    alt="dhamma wheel"
                  />
                </div>
                <div sx={{ mr: -2 }}>
                  <MobileMenuButton
                    path="M6 18L18 6M6 6l12 12"
                    setOpen={() => setOpen(false)}
                  />
                </div>
              </Flex>
              <Box px={2} pt={2} pb={3}>
                <NavLink variant="menu" href="#">
                  Product
                </NavLink>

                <NavLink sx={{ mt: 1 }} variant="menu" href="#">
                  Features
                </NavLink>
              </Box>
              <div>
                <NavLink
                  variant="primary"
                  href="#"
                  sx={{
                    display: 'block',
                    width: 'full',
                    px: 5,
                    py: 3,
                    textAlign: 'center',
                    bg: 'formBackground',

                    '&:hover, &:focus': {
                      bg: 'light',
                    },
                  }}
                >
                  Log in
                </NavLink>
              </div>
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function FullWidthMenu() {
  return (
    <Box
      sx={{
        display: ['none', null, 'block'],
        ml: [null, null, 10],
        pr: [null, null, 4],
        '>:not(:first-of-type)': {
          ml: 8,
        },
      }}
    >
      <NavLink variant="nav" href="#">
        Product
      </NavLink>
      <NavLink variant="nav" href="#">
        Features
      </NavLink>
      <NavLink variant="primary" href="#">
        Log in
      </NavLink>
    </Box>
  )
}
