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
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { InputMachine } from 'src/inputMachine'
import { useFormService } from 'src/hooks/useFormService'
import featureToggles from 'src/featureToggles'

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
  let validation = {
    validationSchema,
    validationResolver,
  }
  if (featureToggles?.disableFormValidation) {
    validation = undefined
  }
  const methods = useForm(validation)

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
  const { t } = useTranslation('form')
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
    id: name,
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
        errors={{
          ...errors,
          [name]: {
            ...errors?.[name],
            // feed the intl key from validation to `t`
            // i18next-extract-disable-next-line
            message: t(errors?.[name]?.message),
          },
        }}
      />
    </>
  )
}

/** Radio or checkbox input */
export function FormInputChoice({ type, name, options, ...rest }) {
  const { register, errors } = useFormContext()
  const { t } = useTranslation('form')

  const props = {
    name,
    ref: register,
  }

  return (
    /* i18next-extract-disable-next-line */
    <FormInputChoiceBox {...{ errors, name, label: t(`form:${name}.label`) }}>
      {options.map(({ label, value, checked }) => (
        <Label
          as={motion.label}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          key={label}
        >
          {type === 'radio' && (
            <Radio
              value={value}
              id={`${name}.${value}`}
              defaultChecked={checked}
              {...props}
              {...rest}
            />
          )}
          {type === 'checkbox' && (
            <Checkbox
              value={value}
              id={`${name}.${value}`}
              defaultChecked={checked}
              {...props}
              {...rest}
            />
          )}
          {/* i18next-extract-disable-next-line */}
          {t(`form:${name}.${label}`)}
        </Label>
      ))}
    </FormInputChoiceBox>
  )
}

/** Presentational layer for FormInputChoice */
export function FormInputChoiceBox({ name, label, children }) {
  const { t } = useTranslation('form')
  const { errors } = useFormContext()
  const hasError = errors?.[name]

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.075,
            staggerChildren: 0.025,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <Box variant={hasError ? 'box.formError' : 'box.form'}>
        {label && <Label htmlFor={name}>{label}</Label>}
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
          errors={{
            ...errors,
            [name]: {
              ...errors?.[name],
              // i18next-extract-disable-next-line
              message: t(errors?.[name]?.message),
            },
          }}
        />
      </Box>
    </motion.div>
  )
}
