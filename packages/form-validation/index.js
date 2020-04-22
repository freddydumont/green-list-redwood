import * as yup from 'yup'

const userSchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  firstName: yup.string().required('form:validation.firstname'),
  lastName: yup.string().required('form:validation.lastname'),
  email: yup
    .string()
    .email('form:validation.email.valid')
    .required('form:validation.email.required'),
  dateOfBirth: yup
    .date()
    .typeError('form:validation.dateofbirth.valid')
    .required('form:validation.dateofbirth.required'),
  gender: yup
    .mixed()
    .oneOf(['MALE', 'FEMALE'], 'form:validation.gender')
    .required('form:validation.gender'),
  lang: yup
    .mixed()
    .oneOf(['FR', 'EN'], 'form:validation.lang')
    .required('form:validation.lang'),
  location: yup.string().required('form:validation.location'),
  phone: yup.string().required('form:validation.phone'),
  contactPreference: yup
    .array(
      yup
        .mixed()
        .oneOf(['EMAIL', 'PHONE', 'TEXT'], 'form:validation.contactPreference')
    )
    .required('form:validation.contactPreference'),
})

const skillSchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  // ids temporarily hard coded for categories and skills
  categories: yup.array(yup.mixed().oneOf(['1', '2', '3', '4'])),
  kitchen: yup.array(
    yup.mixed().oneOf(Array.from(Array(8), (_, i) => (i + 1).toString()))
  ),
  maintenance: yup.array(
    yup.mixed().oneOf(Array.from(Array(6), (_, i) => (i + 9).toString()))
  ),
  technology: yup.array(
    yup.mixed().oneOf(Array.from(Array(4), (_, i) => (i + 15).toString()))
  ),
  accounting: yup.array(
    yup.mixed().oneOf(Array.from(Array(2), (_, i) => (i + 19).toString()))
  ),
  other: yup.string().notRequired(),
  consent: yup.boolean(),
})

const availabilitySchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  // ids temporarily hard coded
  availability: yup
    .array(yup.mixed().oneOf(['1', '2', '3', '4', '5']))
    .required('form:validation.availability'),
})

export { userSchema, skillSchema, availabilitySchema }
