import { Flex, Divider } from 'theme-ui'
import { useTranslation } from 'react-i18next'
import { userSchema } from 'form-validation'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import FormNavButton from 'src/components/FormNavButton/FormNavButton'
import {
  Form,
  FormField,
  FormInputChoice,
} from 'src/components/FormComponents/FormComponents'
import FormPageAnimation from 'src/components/FormPageAnimation/FormPageAnimation'
import featureToggles from 'src/featureToggles'

/** Collect identification and contact information */
const FormPageInfo = () => {
  const [, send] = useFormService()
  const { i18n } = useTranslation()

  const onSubmit = (data) => {
    send({
      type: 'NEXT',
      data: {
        // if validation is disabled, date conversion must also be disabled
        // because `dateOfBirth` will be an empty string rather than a Date
        info: featureToggles?.disableFormValidation
          ? data
          : {
              ...data,
              // convert date to format accepted by <input type="date" />
              // this allows prefilling date field when going back in the form,
              // while also allowing date validation
              dateOfBirth: data.dateOfBirth.toISOString().substr(0, 10),
            },
      },
    })
  }

  return (
    <FormPageLayout
      title="Contact information"
      description="The information you provide here will allow us to identify and contact you."
    >
      <Form onSubmit={onSubmit} validationSchema={userSchema}>
        <FormPageAnimation motionKey="info">
          <FormField label="First Name" name="firstName" />
          <FormField label="Last Name" name="lastName" />
          <FormField label="Email" name="email" type="email" />
          <FormField label="Date of birth" name="dateOfBirth" type="date" />

          <FormInputChoice
            type="radio"
            label="Gender"
            name="gender"
            options={[
              { label: 'Male', value: 'MALE' },
              { label: 'Female', value: 'FEMALE' },
            ]}
          />

          <FormInputChoice
            type="radio"
            label="Preferred language"
            name="lang"
            options={[
              {
                label: 'Français',
                value: 'FR',
                checked: i18n.language === 'fr',
              },
              {
                label: 'English',
                value: 'EN',
                checked: i18n.language === 'en',
              },
            ]}
          />

          <FormField label="City" name="location" />
          <FormField label="Phone number" name="phone" type="tel" />

          <FormInputChoice
            type="checkbox"
            label="Contact preferences"
            name="contactPreference"
            options={[
              { label: 'Email', value: 'EMAIL' },
              { label: 'Phone', value: 'PHONE' },
              { label: 'Text', value: 'TEXT' },
            ]}
          />
        </FormPageAnimation>

        {/* NAVIGATION BUTTONS */}
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

export default FormPageInfo
