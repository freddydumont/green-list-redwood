import { Spinner, Flex } from 'theme-ui'

const CellLoading = () => {
  return (
    <Flex variant="flex.center" sx={{ maxWidth: 'full' }}>
      <Spinner />
    </Flex>
  )
}

export default CellLoading
