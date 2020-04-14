import { useMachine } from '@xstate/react'
import { createContext } from 'react'
import { Text } from '@theme-ui/components'

import FormPageInfo from 'src/components/FormPageInfo/FormPageInfo'
import FormPageSkills from 'src/components/FormPageSkills/FormPageSkills'
import FormPageAvailability from 'src/components/FormPageAvailability/FormPageAvailability'
import { formMachine } from 'src/formMachine'
import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import FormLayout from 'src/layouts/FormLayout/FormLayout'
import FormButtonWrapper from 'src/components/FormButtonWrapper/FormButtonWrapper'
import { Form } from 'src/components/FormComponents/FormComponents'

export const ServiceContext = createContext({})

const FormPage = () => {
  const [current, , service] = useMachine(formMachine, { immediate: true })

  return (
    <FormLayout>
      <ServiceContext.Provider value={service}>
        {
          // this is an object literal that acts as a switch for pages
          {
            info: <FormPageInfo />,
            skills: <FormPageSkills />,
            availability: <FormPageAvailability />,
            /**
             * Present the whole form for the user to review before final
             * submission
             **/
            validation: (
              <FormPageLayout
                title="Validation"
                description="this is a test description"
              >
                <Form>
                  <Text sx={{ fontFamily: 'mono' }}>
                    <pre>{JSON.stringify(current.context, null, 2)}</pre>
                  </Text>
                  <FormButtonWrapper />
                </Form>
              </FormPageLayout>
            ),
            default: null,
          }[current.value || 'default']
        }
      </ServiceContext.Provider>
    </FormLayout>
  )
}

export default FormPage
