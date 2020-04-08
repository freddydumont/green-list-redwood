import { Label, Checkbox } from 'theme-ui'
import { useFormContext, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'

import CellLoading from '../CellLoading/CellLoading'
import CellFailure from '../CellFailure/CellFailure'
import {
  FormInputChoice,
  FormInputChoiceBox,
  FormField,
} from '../FormComponents/FormComponents'

export const QUERY = gql`
  query {
    skillDomains {
      id
      name
      skills {
        id
        name
      }
    }
  }
`

export const Loading = () => <CellLoading />

export const Failure = ({ error }) => <CellFailure error={error} />

export const Success = ({ skillDomains }) => {
  console.log('Success -> skillDomains', skillDomains)
  return (
    <>
      <FormInputChoice
        type="checkbox"
        label="Areas of interest"
        name="categories"
        options={skillDomains.map((domain) => ({
          label: domain.name,
          value: domain.id,
        }))}
      />

      <ConditionalCheckboxes />

      <FormField label="Other skills" name="other" as="textarea" />

      <FormInputChoice
        type="checkbox"
        name="consent"
        options={[
          {
            label:
              'I consent to being contacted by committees for recruitment purposes',
          },
        ]}
      />
    </>
  )
}

const skillsData = {
  kitchen: [
    'question 1',
    'question 2',
    'question 3',
    'question 4',
    'question 5',
    'question 6',
    'question 7',
    'question 8',
  ],
  maintenance: [
    'painting',
    'plumbing',
    'carpentry',
    'electricity',
    'architecture',
    'etc',
  ],
  technology: [
    'sysadmin',
    'software development',
    'tech support',
    'networking',
    'etc',
  ],
  accounting: ['accounting', 'bookkeeping', 'etc'],
}

/**
 * Skill selection checkboxes that appear when a category is selected
 * A `react-hook-form` Controller is used to register the checkbox group
 * as the component mounts. The checkboxes themselves are registered directly.
 */
const ConditionalCheckboxes = () => {
  const { watch, control, register } = useFormContext()

  // when a category is selected, the component is rerendered
  // so we have an updated array of user-selected categories
  const selectedCategories = watch('categories')

  // skillsData is then rendered as a checkbox group for each category
  if (selectedCategories) {
    return (
      <>
        {selectedCategories.map((category) => (
          <Controller
            as={FormInputChoiceBox}
            key={category}
            label={category}
            control={control}
            // this template string creates a skill object with each
            // selected category as properties when the form is submitted
            name={`skills.${category}`}
            animate
          >
            {skillsData[category].map((skill) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                key={skill}
              >
                <Label>
                  <Checkbox
                    // and a skill property under the category
                    name={`skills[${category}][${skill}]`}
                    ref={register}
                  />
                  {skill}
                </Label>
              </motion.div>
            ))}
          </Controller>
        ))}
      </>
    )
  }

  return null
}
