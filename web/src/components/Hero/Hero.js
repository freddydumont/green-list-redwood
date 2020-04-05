/** @jsx jsx **/
import { jsx, Box, Text, Button } from 'theme-ui'
import { Link, routes } from '@redwoodjs/router'
import { useTranslation } from 'react-i18next'

import NavBar from 'src/components/NavBar/NavBar'

const Hero = () => {
  const { t } = useTranslation()

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
            <NavBar />
          </Box>

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
                {t('Give service at ')}
                <br sx={{ display: [null, null, null, null, 'none'] }} />
                <span sx={{ color: 'primary' }}>{t('Dhamma Suttama')}</span>
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
