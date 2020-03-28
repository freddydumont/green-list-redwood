import * as yup from 'yup'
import { Divider, Flex, Label, Checkbox } from 'theme-ui'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import { useFormContext, Controller } from 'react-hook-form'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import FormNavButton from 'src/components/FormNavButton/FormNavButton'
import {
  Form,
  FormField,
  FormInputChoice,
  FormInputChoiceBox,
} from 'src/components/FormComponents/FormComponents'

export const skillSchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  categories: yup.array(
    yup.mixed().oneOf(['kitchen', 'maintenance', 'technology', 'accounting'])
  ),
  skills: yup
    .mixed()
    .notRequired()
    .test('skills', 'custom error message', function(skills) {
      // This is the whole form object that comes to the validation
      const formData = this?.options?.context

      // when no category is selected, skills should be undefined
      if (isEmpty(formData.categories)) {
        return skills === undefined
      }

      // the skills object should contain only and exactly the keys
      // that are selected in categories
      return isEqual(Object.keys(skills), formData.categories)
    }),
  other: yup.string().notRequired(),
  consent: yup.boolean(),
})

const skillResolver = (formValues) => {
  // the resolver is triggered before onChange actually fires,
  // so <ConditionalCheckboxes /> and the skills object
  // don't exist when we get here on `reValidate`
  // if that happens, we ignore the validation
  if (!isEmpty(formValues.categories) && formValues.skills === undefined) {
    return {
      values: formValues,
      errors: {},
    }
  }

  try {
    // we need to validate with context to work with our custom
    // skills validation in the schema
    const values = skillSchema.validateSync(formValues, {
      abortEarly: false,
      context: formValues,
    })

    return {
      values,
      errors: {},
    }
  } catch (error) {
    // if there is a validation error, we return it in a format that is
    // understood by react-hook-form
    // https://react-hook-form.com/api#validationResolver
    return {
      values: error ? error.value : {},
      errors: error
        ? error.inner?.reduce((previous, currentError) => {
            return {
              ...previous,
              [currentError.path]: currentError,
            }
          }, {})
        : {},
    }
  }
}

/** Collect user skills */
const FormPageSkills = () => {
  const [, send] = useFormService()

  const onSubmit = (data) => {
    send({
      type: 'NEXT',
      data: {
        skills: data,
      },
    })
  }

  return (
    <FormPageLayout
      title="Interests and skills"
      description="Choose your areas of interests in Dhamma service and select your skills if applicable"
    >
      <Form
        onSubmit={onSubmit}
        validationSchema={skillSchema}
        validationResolver={skillResolver}
      >
        <FormInputChoice
          type="checkbox"
          label="Areas of interest"
          name="categories"
          options={[
            { label: 'Kitchen', value: 'kitchen' },
            { label: 'Maintenance', value: 'maintenance' },
            { label: 'Technology', value: 'technology' },
            { label: 'Accounting', value: 'accounting' },
          ]}
        />

        <ConditionalCheckboxes />

        <FormField label="Other skills" name="other" as="textarea" />

        <FormInputChoice
          type="checkbox"
          name="consent"
          options={[
            {
              label:
                'I consent to being contacted by committees for recruitment purposes',
            },
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

const skillsData = {
  kitchen: [
    'question 1',
    'question 2',
    'question 3',
    'question 4',
    'question 5',
    'question 6',
    'question 7',
    'question 8',
  ],
  maintenance: [
    'painting',
    'plumbing',
    'carpentry',
    'electricity',
    'architecture',
    'etc',
  ],
  technology: [
    'sysadmin',
    'software development',
    'tech support',
    'networking',
    'etc',
  ],
  accounting: ['accounting', 'bookkeeping', 'etc'],
}

/**
 * Skill selection checkboxes that appear when a category is selected
 * A `react-hook-form` Controller is used to register the checkbox group
 * as the component mounts. The checkboxes themselves are registered directly.
 */
const ConditionalCheckboxes = () => {
  const { watch, control, register } = useFormContext()

  // when a category is selected, the component is rerendered
  // so we have an updated array of user-selected categories
  const selectedCategories = watch('categories')

  // skillsData is then rendered as a checkbox group for each category
  if (selectedCategories) {
    return (
      <>
        {selectedCategories.map((category) => (
          <Controller
            as={FormInputChoiceBox}
            key={category}
            label={category}
            control={control}
            // this template string creates a skill object with each
            // selected category as properties when the form is submitted
            name={`skills.${category}`}
          >
            {skillsData[category].map((skill) => (
              <Label key={skill}>
                <Checkbox
                  // and a skill property under the category
                  name={`skills[${category}][${skill}]`}
                  ref={register}
                />
                {skill}
              </Label>
            ))}
          </Controller>
        ))}
      </>
    )
  }

  return null
}

export default FormPageSkills
