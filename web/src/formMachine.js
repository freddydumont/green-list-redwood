import { Machine, assign } from 'xstate'

const formMachine = Machine(
  {
    id: 'form',
    initial: 'home',
    states: {
      home: {
        on: {
          START: {
            target: 'info',
            actions: assign({
              lang: (ctx, event) => event.lang,
            }),
          },
        },
      },
      info: {
        on: {
          // TODO: make previous a cancel action. warn user and clear form state
          PREVIOUS: 'home',
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
          SUBMIT: {
            target: 'confirmation',
            cond: 'validateForm',
          },
        },
      },
      confirmation: {},
    },
  },
  {
    guards: {
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
