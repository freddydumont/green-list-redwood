import { Styled, Button, Divider } from 'theme-ui'
import { Link, routes } from '@redwoodjs/router'

import FormLayout from 'src/layouts/FormLayout/FormLayout'

const HomePage = () => {
  return (
    <FormLayout>
      <Styled.h1>Serve at Dhamma Suttama</Styled.h1>
      <Styled.p>
        If you have specialized skills, or you&apos;re available for serving in
        the kitchen, Dhamma Suttama would like to know!
      </Styled.p>
      <Button as={Link} to={routes.form()} mr={2}>
        Sign up now
      </Button>
      <Button variant="outline">Learn more</Button>
      <Divider />
      <Styled.h2>How it works</Styled.h2>
      <Styled.h3>Sign up</Styled.h3>
      <Styled.p>
        Fill out a quick form to inform us of your interests, skills and
        availability for the service.
      </Styled.p>
      <Styled.h3>Confirm your availability</Styled.h3>
      <Styled.p>
        Upon receiving your form, you&apos;ll be asked to confirm your email
        address and update your availability.
      </Styled.p>
      <Styled.h3>We contact you</Styled.h3>
      <Styled.p>
        Depending on your preferences, we may contact you to meet the
        centre&apos;s immediate needs, or for a project for which your skills
        would be useful.
      </Styled.p>
      <Button as={Link} to={routes.form()}>
        Sign up now
      </Button>
    </FormLayout>
  )
}

export default HomePage
