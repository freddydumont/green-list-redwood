import { useEffect, useCallback } from 'react'
import {
  useForm,
  ErrorMessage,
  FormContext,
  useFormContext,
} from 'react-hook-form'
import {
  Flex,
  Label,
  Input,
  Radio,
  Box,
  Checkbox,
  Text,
  Textarea,
} from '@theme-ui/components'
import { useMachine } from '@xstate/react'
import isEmpty from 'lodash/isEmpty'

import { InputMachine } from 'src/inputMachine'
import { useFormService } from 'src/hooks/useFormService'

/**
 * [Smart form component](https://react-hook-form.com/advanced-usage#SmartFormComponent).
 * Passes `react-hook-form` methods to children.
 */
export function Form({
  children,
  onSubmit,
  validationSchema,
  validationResolver,
}) {
  const methods = useForm({
    validationSchema,
    validationResolver,
  })

  // value and context fields match so we can use both together to retrieve
  // the current form state
  const [{ value, context }] = useFormService()
  const formState = context?.[value]

  // useCallback is needed to avoid infinite rerenders in useEffect
  const retrieveFormState = useCallback(() => {
    if (formState) {
      methods.reset(formState)

      // FIXME: triggerValidation should validate the whole form when called
      // without args. it doesn't but validating a single input somewhow does
      // ¯\_(ツ)_/¯
      // so this is a hack that should be fixed if the problem is ever
      // addressed upstream
      methods.triggerValidation('_hidden')
    }
  }, [formState, methods])

  // this now acts as componentDidMount, so it fires only once
  useEffect(retrieveFormState, [])

  return (
    <FormContext {...methods}>
      <Flex
        as="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{
          flexDirection: 'column',
        }}
      >
        <input type="hidden" name="_hidden" ref={methods.register} />
        {children}
      </Flex>
    </FormContext>
  )
}

/**
 * Simple form input with label.
 * Tracks its state explicitely via xstate to know when valid state is reached.
 */
export function FormField({ name, label, as = 'input', ...rest }) {
  const [state, send] = useMachine(InputMachine)
  const { register, errors } = useFormContext()

  // if errors is not empty, form has been validated
  // so input has to be in either valid or error state
  if (!isEmpty(errors)) {
    errors?.[name] ? send('ERROR') : send('SUCCESS')
  }

  // however, if error is empty, but a field was previously in error state,
  // it should be forced into valid state.
  // this prevents the last field to be ignored in the logic above
  if (isEmpty(errors) && state.value === 'error') {
    send('SUCCESS')
  }

  function getVariant(state) {
    return {
      idle: 'input',
      error: 'error',
      valid: 'valid',
    }[state]
  }

  const props = {
    variant: getVariant(state.value),
    ref: register,
    name,
    ...rest,
  }

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      {as === 'input' && <Input {...props} />}
      {as === 'textarea' && <Textarea sx={{ height: 24 }} {...props} />}
      <ErrorMessage
        as={<Text color="textDanger" mb={8} />}
        name={name}
        errors={errors}
      />
    </>
  )
}

/** Radio or checkbox input */
export function FormInputChoice({ type, name, label, options, ...rest }) {
  const { register, errors } = useFormContext()

  const props = {
    name,
    ref: register,
  }

  return (
    <FormInputChoiceBox {...{ errors, name, label }}>
      {options.map(({ label, value }) => (
        <Label key={label}>
          {type === 'radio' && <Radio value={value} {...props} {...rest} />}
          {type === 'checkbox' && (
            <Checkbox value={value} {...props} {...rest} />
          )}
          {label}
        </Label>
      ))}
    </FormInputChoiceBox>
  )
}

/** Presentational layer for FormInputChoice */
export function FormInputChoiceBox({ name, label, children }) {
  const { errors } = useFormContext()
  const hasError = errors?.[name]

  return (
    <Box variant={hasError ? 'box.formError' : 'box.form'}>
      {label && <Label>{label}</Label>}
      <Box
        sx={{
          boxShadow: hasError ? 'error' : 'none',
          maxWidth: 'max-content',
          pr: 2,
          borderRadius: '4px',
        }}
      >
        {children}
      </Box>
      <ErrorMessage
        as={<Text color="textDanger" mb={8} />}
        name={name}
        errors={errors}
      />
    </Box>
  )
}
