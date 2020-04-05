/** @jsx jsx **/
import { jsx, Box, Flex, NavLink } from 'theme-ui'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, routes } from '@redwoodjs/router'
import { useTranslation } from 'react-i18next'

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
    <>
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
            <LogoLink />
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
    </>
  )
}

function LogoLink() {
  const { t } = useTranslation()
  return (
    <NavLink as={Link} to={routes.home()}>
      <img
        sx={{ height: [8, 10], width: 'auto' }}
        src="/img/dhamma_wheel.svg"
        alt={t('navbar.logo_alt')}
      />
    </NavLink>
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
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const code = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(code)
  }

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
                <LogoLink />
                <div sx={{ mr: -2 }}>
                  <MobileMenuButton
                    path="M6 18L18 6M6 6l12 12"
                    setOpen={() => setOpen(false)}
                  />
                </div>
              </Flex>
              <Box px={2} pt={2} pb={3}>
                <NavLink variant="menu" as={Link} to={routes.form()}>
                  {t('navbar.Sign up')}
                </NavLink>

                <NavLink
                  role="button"
                  onClick={changeLanguage}
                  sx={{ mt: 1 }}
                  variant="menu"
                >
                  {t('navbar.change_lang')}
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
                  {t('navbar.Log in')}
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
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const code = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(code)
  }

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
      <NavLink as={Link} to={routes.form()}>
        {t('navbar.Sign up')}
      </NavLink>
      <NavLink role="button" onClick={changeLanguage}>
        {t('navbar.change_lang')}
      </NavLink>
      <NavLink variant="primary" href="#">
        {t('navbar.Log in')}
      </NavLink>
    </Box>
  )
}
