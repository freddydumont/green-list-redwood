import { Spinner, Text, Flex } from 'theme-ui'

import { FormInputChoice } from 'src/components/FormComponents/FormComponents'

export const QUERY = gql`
  query {
    availabilities {
      id
      name
    }
  }
`

export const Loading = () => (
  <Flex variant="flex.center" sx={{ maxWidth: 'full' }}>
    <Spinner />
  </Flex>
)

export const Failure = ({ error }) => (
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

export const Success = ({ availabilities }) => {
  return (
    <FormInputChoice
      type="checkbox"
      name="availability"
      options={availabilities.map((availability) => ({
        label: availability.name,
        value: availability.id,
      }))}
    />
  )
}
