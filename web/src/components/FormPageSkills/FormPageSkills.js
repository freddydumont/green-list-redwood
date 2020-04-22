import { skillSchema } from 'form-validation'

import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import { useFormService } from 'src/hooks/useFormService'
import { Form } from 'src/components/FormComponents/FormComponents'
import FormPageAnimation from 'src/components/FormPageAnimation/FormPageAnimation'
import FormButtonWrapper from 'src/components/FormButtonWrapper/FormButtonWrapper'
import SkillsCell from 'src/components/SkillsCell/SkillsCell'

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
