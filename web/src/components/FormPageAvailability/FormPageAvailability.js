import * as yup from 'yup'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import {
  Form,
  FormInputChoice,
} from 'src/components/FormComponents/FormComponents'

import FormPageAnimation from '../FormPageAnimation/FormPageAnimation'
import FormButtonWrapper from '../FormButtonWrapper/FormButtonWrapper'

const availabilities = [
  'seasonal',
  'betweenCourses',
  'courses',
  'dayZero',
  'remote',
]

export const availabilitySchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  availability: yup.array(yup.mixed().oneOf(availabilities)).required(),
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
          <FormInputChoice
            type="checkbox"
            label="Availabilities"
            name="availability"
            options={[
              { label: 'Seasonal work periods', value: 'seasonal' },
              { label: 'Between courses', value: 'betweenCourses' },
              { label: '10 day and 3 day courses', value: 'courses' },
              { label: 'Day 0', value: 'dayZero' },
              // could be displayed only for relevant skill categories
              { label: 'Remotely', value: 'remote' },
            ]}
          />
        </FormPageAnimation>
        <FormButtonWrapper />
      </Form>
    </FormPageLayout>
  )
}

export default FormPageAvailability
