import * as yup from 'yup'
import i18next from 'i18next'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import { Form } from 'src/components/FormComponents/FormComponents'
import AvailabilitiesCell from 'src/components/AvailabilitiesCell/AvailabilitiesCell'

import FormPageAnimation from '../FormPageAnimation/FormPageAnimation'
import FormButtonWrapper from '../FormButtonWrapper/FormButtonWrapper'

export const availabilitySchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  // ids temporarily hard coded
  availability: yup
    .array(yup.mixed().oneOf(['1', '2', '3', '4', '5']))
    .required(i18next.t('form:validation.availability')),
})

/**
 * Collect periods of availability if applicable.
 * Monthly availability will be collected in the confirmation email.
 **/
const FormPageAvailability = () => {
  const [, send] = useFormService()

  const onSubmit = (data) => {
    send({
      type: 'NEXT',
      data: {
        availability: data,
      },
    })
  }

  return (
    <FormPageLayout
      title="Availabilities"
      description="If you'd like to make yourself available for specific periods, you can choose them below."
    >
      <Form onSubmit={onSubmit} validationSchema={availabilitySchema}>
        <FormPageAnimation motionKey="availability">
          <AvailabilitiesCell />
        </FormPageAnimation>
        <FormButtonWrapper />
      </Form>
    </FormPageLayout>
  )
}

export default FormPageAvailability
