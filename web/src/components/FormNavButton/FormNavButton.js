import { Button } from 'theme-ui'
import { useFormContext } from 'react-hook-form'

import { useFormService } from 'src/hooks/useFormService'

/**
 * Button subscribing to the form state that returns the appropriate value
 * for the current state.
 */
const FormNavButton = () => {
  const [current, send] = useFormService()
  const { formState } = useFormContext()

  // read dirty state to activate formState updates
  // see https://react-hook-form.com/api#formState
  ;(function () {
    return formState.dirty
  })()

  const next = <Button variant="form" as="input" type="submit" value="Next" />

  const previous = (
    <Button
      // type prevents button from being clicked when pressing enter
      type="button"
      variant="outline"
      mr={2}
      onClick={() => send({ type: 'PREVIOUS' })}
    >
      Previous
    </Button>
  )

  const cancel = (
    <Button
      type="button"
      variant="outline"
      mr={2}
      onClick={() => {
        send('PREVIOUS', { formState })
      }}
    >
      Cancel
    </Button>
  )

  switch (current.value) {
    case 'info':
      return (
        <>
          {cancel}
          {next}
        </>
      )
    case 'skills':
    case 'availability':
      return (
        <>
          {previous}
          {next}
        </>
      )

    case 'validation':
      return (
        <>
          {previous}
          <Button variant="form" onClick={() => send({ type: 'SUBMIT' })}>
            Submit
          </Button>
        </>
      )

    default:
      return null
  }
}

export default FormNavButton
