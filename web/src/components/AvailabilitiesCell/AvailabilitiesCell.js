import { FormInputChoice } from 'src/components/FormComponents/FormComponents'

import CellLoading from '../CellLoading/CellLoading'
import CellFailure from '../CellFailure/CellFailure'

export const QUERY = gql`
  query {
    availabilities {
      id
      name
    }
  }
`

export const Loading = () => <CellLoading />

export const Failure = ({ error }) => <CellFailure error={error} />

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
