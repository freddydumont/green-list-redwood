import * as yup from 'yup'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import { Form } from 'src/components/FormComponents/FormComponents'
import FormPageAnimation from 'src/components/FormPageAnimation/FormPageAnimation'
import FormButtonWrapper from 'src/components/FormButtonWrapper/FormButtonWrapper'
import SkillsCell from 'src/components/SkillsCell/SkillsCell'

export const skillSchema = yup.object().shape({
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
      <Form onSubmit={onSubmit} validationSchema={skillSchema}>
        <FormPageAnimation motionKey="skills">
          <SkillsCell />
        </FormPageAnimation>

        <FormButtonWrapper />
      </Form>
    </FormPageLayout>
  )
}

export default FormPageSkills
