import { Button } from 'theme-ui'

import { useFormService } from 'src/hooks/useFormService'

/**
 * Button subscribing to the form state that returns the appropriate value
 * for the current state.
 */
const FormNavButton = () => {
  const [current, send] = useFormService()

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

  switch (current.value) {
    case 'info':
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
