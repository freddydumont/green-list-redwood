/** @jsx jsx **/
import { jsx, Box, Text, Flex, Button } from 'theme-ui'
import { Link, routes } from '@redwoodjs/router'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
  const { t } = useTranslation(['home'])

  return (
    <Box as="section" sx={{ py: 12, bg: 'background' }}>
      <Box sx={{ maxWidth: 'screen-xl', mx: 'auto', px: [4, 6, null, 8] }}>
        {/* TITLE COPY */}
        <Box sx={{ textAlign: [null, null, null, 'center'] }}>
          <Text
            id="how-it-works"
            as="p"
            sx={{
              fontSize: 'base',
              lineHeight: 6,
              color: 'primary',
              fontWeight: 'semibold',
              letterSpacing: 'wide',
              textTransform: 'uppercase',
            }}
          >
            {t('home:howitworks.Dhamma Dana')}
          </Text>
          <Text
            as="h3"
            variant="heading"
            sx={{ mt: 2, fontSize: ['3xl', '4xl'], lineHeight: [8, 10] }}
          >
            {t('home:howitworks.How it works')}
          </Text>
          <Text
            as="p"
            variant="copy"
            sx={{
              mt: 4,
              maxWidth: '2xl',
              lineHeight: 7,
              mx: [null, null, null, 'auto'],
            }}
          >
            {t('home:howitworks.copy')}
          </Text>
        </Box>

        {/* FEATURE LIST */}
        <Box>
          <ol sx={{ maxWidth: '3xl', mx: [null, null, null, 'auto'] }}>
            <ListItem
              count={1}
              iconPath="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
            <ListItem
              count={2}
              iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
            <ListItem
              count={3}
              iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </ol>
        </Box>

        <Flex variant="flex.center" mt={12} mb={12}>
          <Button as={Link} to={routes.form()}>
            {t('home:howitworks.Sign up now')}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default HowItWorks

function ListItem({ count, iconPath }) {
  const { t } = useTranslation(['home'])

  return (
    <li sx={{ mt: 12 }}>
      <Flex>
        <Icon path={iconPath} />
        <Box ml={4}>
          <Text
            as="h5"
            sx={{
              fontSize: ['lg', null, null, 'xl'],
              lineHeight: 6,
              fontWeight: 'medium',
              color: 'text',
            }}
          >
            <span
              sx={{ fontWeight: 'bold', fontSize: ['2xl', null, null, '3xl'] }}
            >{`${count}. `}</span>
            {/* i18next-extract-disable-next-line */}
            {t(`home:howitworks.${count}.title`)}
          </Text>
          <Text
            as="p"
            sx={{
              mt: 2,
              fontSize: ['base', null, null, 'lg'],
              lineHeight: 6,
              color: 'textMuted',
            }}
          >
            {/* i18next-extract-disable-next-line */}
            {t(`home:howitworks.${count}.copy`)}
          </Text>
        </Box>
      </Flex>
    </li>
  )
}

function Icon({ path }) {
  return (
    <Box sx={{ flexShrink: 0 }}>
      <Flex
        variant="flex.center"
        sx={{
          height: [12, null, null, '3.5rem'],
          width: [12, null, null, '3.5rem'],
          borderRadius: 'md',
          bg: 'primary',
          color: 'background',
        }}
      >
        <svg
          sx={{ height: [6, null, null, 8], width: [6, null, null, 8] }}
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
      </Flex>
    </Box>
  )
}
