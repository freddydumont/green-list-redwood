/** @jsx jsx **/
import { jsx, Box, Text, Button } from 'theme-ui'
import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

const Hero = () => {
  const [open, setOpen] = useState(false)

  return (
    <section>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.css"
      ></link>
      <Box
        sx={{
          position: 'relative',
          bg: 'white',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            maxWidth: 'screen-xl',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 10,
              pb: [8, 16, 20, 28, 32],
              bg: 'white',
              maxWidth: [null, null, null, '2xl'],
              width: [null, null, null, 'full'],
            }}
          >
            <Box
              sx={{
                pt: 6,
                px: [4, 6, 8],
              }}
            >
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      {/* Dhamma wheel icon from https://github.com/twitter/twemoji/ */}
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/img/dhamma_wheel.svg"
                        alt=""
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        {...{
                          '@click': 'open = true',
                        }}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4">
                  <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </Box>

            <div
              {...{
                'x-show': 'open',
                'x-transition:enter': 'duration-150 ease-out',
                'x-transition:enter-start': 'opacity-0 scale-95',
                'x-transition:enter-end': 'opacity-100 scale-100',
                'x-transition:leave': 'duration-100 ease-in',
                'x-transition:leave-start': 'opacity-100 scale-100',
                'x-transition:leave-end': 'opacity-0 scale-95',
              }}
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md">
                <div className="rounded-lg bg-white shadow-xs overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/img/logos/workflow-mark-on-white.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        {...{
                          '@click': 'open = false',
                        }}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      Features
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Box
              sx={{
                mt: [10, 12, 16, 20, 28],
                mx: 'auto',
                px: [4, 6, 8],
                maxWidth: 'screen-xl',
              }}
            >
              <div
                sx={{
                  textAlign: [null, 'center', null, 'left'],
                }}
              >
                <Text
                  as="h2"
                  sx={{
                    fontSize: ['4xl', '5xl', '6xl'],
                    fontWeight: 'extrabold',
                    letterSpacing: 'tight',
                    lineHeight: [10, 'none'],
                    color: 'gray.9',
                  }}
                >
                  {'Give service at '}
                  <br
                    sx={{
                      display: [null, null, null, null, 'none'],
                    }}
                  />
                  <span sx={{ color: 'primary' }}>Dhamma Suttama</span>
                </Text>
                <Text
                  as="p"
                  sx={{
                    mt: [3, 5],
                    mx: [null, 'auto', null, 0],
                    fontSize: ['base', 'lg', 'xl'],
                    maxWidth: [null, 'xl'],
                    color: 'gray.6',
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
                  <Button as={Link} to={routes.form()} href="#">
                    Get started
                  </Button>
                  <Box
                    sx={{
                      mt: [3, 0],
                      ml: [null, 3],
                    }}
                  >
                    <Button as="a" href="#" variant="gray">
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
                color: 'white',
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
    </section>
  )
}

export default Hero
