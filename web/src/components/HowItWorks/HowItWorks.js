/** @jsx jsx **/
import { jsx, Box, Text, Flex, Button } from 'theme-ui'
import { Link, routes } from '@redwoodjs/router'

const HowItWorks = () => {
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
            Dhamma Dana
          </Text>
          <Text
            as="h3"
            variant="heading"
            sx={{ mt: 2, fontSize: ['3xl', '4xl'], lineHeight: [8, 10] }}
          >
            How it works
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
            Dhamma Suttama is always looking for help fulfilling the needs of
            the center. While you can always sign up to serve a course, you can
            also serve in other areas!
          </Text>
        </Box>

        {/* FEATURE LIST */}
        <Box>
          <ul sx={{ maxWidth: '3xl', mx: [null, null, null, 'auto'] }}>
            <ListItem
              count={1}
              title="Sign up"
              copy="Fill out a quick form to register your interests,
                    skills and availability for the service."
              iconPath="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
            <ListItem
              count={2}
              title="Confirm your availability"
              copy="After submitting your form, you'll receive a confirmation to your email address and you'll be able to update your calendar availability."
              iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
            <ListItem
              count={3}
              title="We contact you"
              copy="Depending on your preferences, we may contact you to meet the centre's immediate needs, or
                    for a project matching your skills!"
              iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </ul>
        </Box>

        <Flex variant="flex.center" mt={10}>
          <Button as={Link} to={routes.form()}>
            Sign up now
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default HowItWorks

function ListItem({ count, title, copy, iconPath }) {
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
            {title}
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
            {copy}
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
