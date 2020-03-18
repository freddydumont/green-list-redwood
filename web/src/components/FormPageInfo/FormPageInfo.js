import * as yup from 'yup'
import { Flex, Divider } from 'theme-ui'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import FormNavButton from 'src/components/FormNavButton/FormNavButton'
import {
  Form,
  FormField,
  FormInputChoice,
} from 'src/components/FormComponents/FormComponents'

export const userSchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  // TODO: add validation pattern to string
  dateOfBirth: yup.string().required(),
  gender: yup
    .mixed()
    .oneOf(['male', 'female'])
    .required(),
  lang: yup
    .mixed()
    .oneOf(['fr', 'en'])
    .required(),
  location: yup.string().required(),
  phone: yup.string().required(),
  contactPreference: yup
    .array(yup.mixed().oneOf(['email', 'phone', 'text']))
    .required(),
})

/** Collect identification and contact information */
const FormPageInfo = () => {
  const [, send] = useFormService()

  const onSubmit = (data) => {
    send({
      type: 'NEXT',
      data: {
        info: data,
      },
    })
  }

  return (
    <FormPageLayout
      title="Contact information"
      description="The information you provide here will allow us to identify and contact you."
    >
      <Form onSubmit={onSubmit} validationSchema={userSchema}>
        <FormField label="First Name" name="firstName" />
        <FormField label="Last Name" name="lastName" />
        <FormField label="Email" name="email" type="email" />
        <FormField label="Date of birth" name="dateOfBirth" type="date" />

        <FormInputChoice
          type="radio"
          label="Gender"
          name="gender"
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />

        <FormInputChoice
          type="radio"
          label="Preferred language"
          name="lang"
          options={[
            { label: 'Français', value: 'fr' },
            { label: 'English', value: 'en' },
          ]}
        />

        <FormField label="City" name="location" />
        <FormField label="Phone number" name="phone" type="tel" />

        <FormInputChoice
          type="checkbox"
          label="Contact preferences"
          name="contactPreference"
          options={[
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'Text', value: 'text' },
          ]}
        />

        <Divider mx={0} mt={0} mb={4} />
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

export default FormPageInfo
