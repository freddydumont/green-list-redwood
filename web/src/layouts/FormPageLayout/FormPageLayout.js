import { Styled, Text, Divider } from 'theme-ui'

/**
 * Basic layout for each form page
 */
const FormPageLayout = ({ title, description, children }) => {
  return (
    <>
      <Styled.h1>{title}</Styled.h1>
      <Text
        as="p"
        sx={{
          fontSize: 2,
        }}
      >
        {description}
      </Text>
      <Divider mx={0} mb={4} />
      {children}
    </>
  )
}

export default FormPageLayout
