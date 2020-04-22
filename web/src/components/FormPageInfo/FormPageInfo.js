import * as yup from 'yup'
import { Flex, Divider } from 'theme-ui'
import { useTranslation } from 'react-i18next'
import { i18next } from 'intl'

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

export const userSchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  firstName: yup.string().required(i18next.t('form:validation.firstname')),
  lastName: yup.string().required(i18next.t('form:validation.lastname')),
  email: yup
    .string()
    .email(i18next.t('form:validation.email.valid'))
    .required(i18next.t('form:validation.email.required')),
  dateOfBirth: yup
    .date()
    .typeError(i18next.t('form:validation.dateofbirth.valid'))
    .required(i18next.t('form:validation.dateofbirth.required')),
  gender: yup
    .mixed()
    .oneOf(['MALE', 'FEMALE'], i18next.t('form:validation.gender'))
    .required(i18next.t('form:validation.gender')),
  lang: yup
    .mixed()
    .oneOf(['FR', 'EN'], i18next.t('form:validation.lang'))
    .required(i18next.t('form:validation.lang')),
  location: yup.string().required(i18next.t('form:validation.location')),
  phone: yup.string().required(i18next.t('form:validation.phone')),
  contactPreference: yup
    .array(
      yup
        .mixed()
        .oneOf(
          ['EMAIL', 'PHONE', 'TEXT'],
          i18next.t('form:validation.contactPreference')
        )
    )
    .required(i18next.t('form:validation.contactPreference')),
})

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
