import { Machine } from 'xstate'

const InputMachine = Machine({
  id: 'input',
  initial: 'idle',
  states: {
    idle: {
      // idle state is left only when the submit button is pressed
      // because validation is `onSubmit`
      on: {
        SUCCESS: 'valid',
        ERROR: 'error',
      },
    },
    // when error or valid state is reached, validation is now `onChange`
    error: {
      on: {
        SUCCESS: 'valid',
      },
    },
    // when a field reaches valid state, it can still be modified,
    // so error state can be reached
    valid: {
      on: {
        ERROR: 'error',
      },
    },
  },
})

export { InputMachine }
