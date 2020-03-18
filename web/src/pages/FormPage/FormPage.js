import { useMachine } from '@xstate/react'
import { createContext } from 'react'
import { Text, Button } from '@theme-ui/components'

import FormPageInfo from 'src/components/FormPageInfo/FormPageInfo'
import FormPageSkills from 'src/components/FormPageSkills/FormPageSkills'
import FormPageAvailability from 'src/components/FormPageAvailability/FormPageAvailability'
import FormNavButton from 'src/components/FormNavButton/FormNavButton'
import { formMachine } from 'src/formMachine'
import FormPageLayout from 'src/layouts/FormPageLayout/FormPageLayout'
import FormLayout from 'src/layouts/FormLayout/FormLayout'

export const ServiceContext = createContext({})

const FormPage = () => {
  const [current, send, service] = useMachine(formMachine, { immediate: true })

  return (
    <FormLayout>
      <ServiceContext.Provider value={service}>
        {
          // this is an object literal that acts as a switch for pages
          {
            home: (
              <FormPageLayout
                title="Home"
                description="this is a test description"
              >
                <>
                  <Button
                    variant="form"
                    onClick={() => send({ type: 'START', lang: 'en' })}
                  >
                    Continue in English
                  </Button>
                  <Button
                    variant="form"
                    onClick={() => send({ type: 'START', lang: 'fr' })}
                  >
                    Continuer en français
                  </Button>
                </>
              </FormPageLayout>
            ),
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
                <Text sx={{ fontFamily: 'mono' }}>
                  <pre>{JSON.stringify(current.context, null, 2)}</pre>
                </Text>
                <FormNavButton />
              </FormPageLayout>
            ),
            /** Display a confirmation message, return home and wipe the data */
            confirmation: (
              <FormPageLayout
                title="Confirmation"
                description="this is a test description"
              />
            ),
            default: null,
          }[current.value || 'default']
        }
      </ServiceContext.Provider>
    </FormLayout>
  )
}

export default FormPage
