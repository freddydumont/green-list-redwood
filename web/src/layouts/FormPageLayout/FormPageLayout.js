import { Text, Divider } from 'theme-ui'

/**
 * Basic layout for each form page
 */
const FormPageLayout = ({ title, description, children }) => {
  return (
    <>
      <Text as="h1" sx={{ fontSize: '5xl', fontWeight: 'semibold' }}>
        {title}
      </Text>
      <Text as="p" sx={{ fontSize: 'xl' }}>
        {description}
      </Text>
      <Divider mx={0} mb={8} />
      {children}
    </>
  )
}

export default FormPageLayout
