import { Machine, assign } from 'xstate'
import { navigate, routes } from '@redwoodjs/router'
import isEmpty from 'lodash/isEmpty'
import i18next from 'i18next'

const formMachine = Machine(
  {
    id: 'form',
    initial: 'info',
    states: {
      info: {
        on: {
          PREVIOUS: {
            target: 'home',
            cond: 'warnBeforeExit',
          },
          NEXT: {
            target: 'skills',
            cond: 'validateFields',
            actions: assign((ctx, event) => event.data),
          },
        },
      },
      skills: {
        on: {
          PREVIOUS: 'info',
          NEXT: {
            target: 'availability',
            cond: 'validateFields',
            actions: assign((ctx, event) => event.data),
          },
        },
      },
      availability: {
        on: {
          PREVIOUS: 'skills',
          NEXT: {
            target: 'validation',
            cond: 'validateFields',
            actions: assign((ctx, event) => event.data),
          },
        },
      },
      validation: {
        on: {
          PREVIOUS: 'availability',
          // SUBMIT: {
          //   target: 'confirmation',
          //   cond: 'validateForm',
          // },
        },
      },
      // final state reached by exiting the form, via completion or cancellation
      home: {
        type: 'final',
        entry: () => navigate(routes.home()),
      },
    },
  },
  {
    guards: {
      /**
       * Warns the user before exiting the form if data would be lost.
       * Both checks are necessary:
       *  - `formState.dirty` is when leaving on the first page (cancel button)
       *  - `context` when leaving on a subsequent untouched page (browser back button)
       */
      warnBeforeExit: (context, event) => {
        if (event?.formState?.dirty || !isEmpty(context)) {
          // TODO: implement a custom confirmation solution
          return window.confirm(i18next.t('form:confirm_exit'))
        }

        // if there is no data loss, we can safely exit without asking user
        return true
      },
      /**
       * This would validate the page's fields on the server before allowing
       * the user to proceed to the next page.
       */
      validateFields: (context, event) => {
        console.log('TCL: context, event', context, event)
        return true
      },
      /**
       * Send the whole form to the server to be validated and written to the
       * database.
       */
      validateForm: (context, event) => {
        console.log('TCL: context, event', context, event)
        return true
      },
    },
  }
)

export { formMachine }
