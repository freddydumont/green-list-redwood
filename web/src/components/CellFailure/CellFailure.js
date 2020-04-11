import { Text } from 'theme-ui'

const CellFailure = ({ error }) => {
  return (
    <div>
      <Text>
        <Text as="span" color="danger">
          {'Error: '}
        </Text>
        There was an error. Please refresh your browser.
      </Text>
      <Text variant="mono">{error.message}</Text>
    </div>
  )
}

export default CellFailure
