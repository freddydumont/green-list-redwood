import * as yup from 'yup'
import { Flex, Divider } from 'theme-ui'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import FormNavButton from 'src/components/FormNavButton/FormNavButton'
import {
  Form,
  FormInputChoice,
} from 'src/components/FormComponents/FormComponents'

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

        <Divider mx={0} mt={0} mb={8} />
        <Flex
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <FormNavButton />
        </Flex>
      </Form>
    </FormPageLayout>
  )
}

export default FormPageAvailability
