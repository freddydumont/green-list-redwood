import { Flex, Divider, Box } from 'theme-ui'

import FormNavButton from 'src/components/FormNavButton/FormNavButton'

/**
 * Wraps short form pages' buttons with an absolutely positioned Box
 * to avoid janky button vertical movement when switching pages.
 */
const FormButtonWrapper = () => {
  return (
    <Box
      sx={{
        width: 'full',
        position: 'absolute',
        bottom: 0,
        right: 0,
        pb: 6,
        px: [6, 8],
      }}
    >
      <Divider mx={0} mt={0} mb={8} />
      <Flex sx={{ justifyContent: 'flex-end' }}>
        <FormNavButton />
      </Flex>
    </Box>
  )
}

export default FormButtonWrapper
