/** @jsx jsx **/
import { jsx, Box, Text, Button, Flex, Link as NavLink } from 'theme-ui'
import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Box
      as="section"
      sx={{ position: 'relative', bg: 'background', overflow: 'hidden' }}
    >
      <Box sx={{ maxWidth: 'screen-xl', mx: 'auto' }}>
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            pb: [8, 16, 20, 28, 32],
            bg: 'background',
            maxWidth: [null, null, null, '2xl'],
            width: [null, null, null, 'full'],
          }}
        >
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
                <Flex
                  variant="flex.between"
                  sx={{ width: ['full', null, 'auto'] }}
                >
                  <NavLink variant="nav" href="#">
                    {/* Dhamma wheel icon from https://github.com/twitter/twemoji/ */}
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

          <MobileMenu {...{ isOpen, setOpen }} />

          <Box
            sx={{
              mt: [10, 12, 16, 20, 28],
              mx: 'auto',
              px: [4, 6, 8],
              maxWidth: 'screen-xl',
            }}
          >
            <div sx={{ textAlign: [null, 'center', null, 'left'] }}>
              <Text
                as="h2"
                variant="heading"
                sx={{
                  fontSize: ['4xl', '5xl', '6xl'],
                  lineHeight: [10, 'none'],
                }}
              >
                {'Give service at '}
                <br sx={{ display: [null, null, null, null, 'none'] }} />
                <span sx={{ color: 'primary' }}>Dhamma Suttama</span>
              </Text>
              <Text
                as="p"
                variant="copy"
                sx={{
                  mt: [3, 5],
                  mx: [null, 'auto', null, 0],
                  maxWidth: [null, 'xl'],
                }}
              >
                If you have specialized skills, or you&apos;re available for
                serving in the kitchen, Dhamma Suttama would like to know!
              </Text>
              <div
                sx={{
                  mt: [5, 8],
                  display: [null, 'flex'],
                  justifyContent: [null, 'center', null, 'start'],
                }}
              >
                <Button as={Link} to={routes.form()}>
                  Get started
                </Button>
                <Box sx={{ mt: [3, 0], ml: [null, 3] }}>
                  <Button
                    sx={{ width: 'full' }}
                    variant="gray"
                    onClick={() => {
                      document.querySelector('#how-it-works').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                    }}
                  >
                    Learn more
                  </Button>
                </Box>
              </div>
            </div>
          </Box>
          <svg
            sx={{
              display: ['none', null, null, 'block'],
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              height: 'full',
              width: 48,
              color: 'background',
              transform: 'translate(50%)',
            }}
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          position: [null, null, null, 'absolute'],
          top: [null, null, null, 0],
          bottom: [null, null, null, 0],
          right: [null, null, null, 0],
          width: [null, null, null, '1/2'],
        }}
      >
        <picture>
          <img
            sx={{
              height: [56, 72, 96, 'full'],
              width: 'full',
              objectFit: 'cover',
            }}
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_200.jpg 200w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_327.jpg 327w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_433.jpg 433w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_525.jpg 525w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_602.jpg 602w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_678.jpg 678w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_762.jpg 762w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_834.jpg 834w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_903.jpg 903w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_972.jpg 972w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1043.jpg 1043w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1106.jpg 1106w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1165.jpg 1165w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1227.jpg 1227w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1291.jpg 1291w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1346.jpg 1346w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1384.jpg 1384w,
              img/43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1400.jpg 1400w"
            src="43232942312_fa286f2f0d_k_n8c4zf_c_scale,w_1400.jpg"
            alt="étagère de coussins de méditation"
          />
        </picture>
      </Box>
    </Box>
  )
}

export default Hero

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
        duration: 0.1,
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
