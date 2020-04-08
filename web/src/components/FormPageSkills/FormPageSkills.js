import * as yup from 'yup'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import { Form } from 'src/components/FormComponents/FormComponents'
import FormPageAnimation from 'src/components/FormPageAnimation/FormPageAnimation'
import FormButtonWrapper from 'src/components/FormButtonWrapper/FormButtonWrapper'
import SkillsCell from 'src/components/SkillsCell/SkillsCell'

export const skillSchema = yup.object().shape({
  _hidden: yup.mixed().required(),
  categories: yup.array(
    yup.mixed().oneOf(['kitchen', 'maintenance', 'technology', 'accounting'])
  ),
  skills: yup
    .mixed()
    .notRequired()
    .test('skills', 'custom error message', function (skills) {
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
        <FormPageAnimation motionKey="skills">
          <SkillsCell />
        </FormPageAnimation>

        <FormButtonWrapper />
      </Form>
    </FormPageLayout>
  )
}

export default FormPageSkills
