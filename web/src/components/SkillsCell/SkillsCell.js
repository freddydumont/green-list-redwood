import { Label, Checkbox } from 'theme-ui'
import { useFormContext, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

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

/**
 * Add an array of skill ids to the SkillDomain object.
 * @param {Object} domain skillDomain object containing an array of skills,
 * @return {number[]} an array of ids
 */
function getSkillsIds(domain) {
  return domain.skills.map((skill) => skill.id)
}

export const afterQuery = ({ skillDomains }) => {
  skillDomains.forEach((domain) => {
    domain.skillsIds = getSkillsIds(domain)
  })
  return { skillDomains }
}

export const Success = ({ skillDomains }) => {
  console.log('Success -> skillDomains', skillDomains)
  return (
    <>
      <FormInputChoice
        type="checkbox"
        name="categories"
        options={skillDomains.map((domain) => ({
          label: domain.name,
          value: domain.id,
        }))}
      />

      <ConditionalCheckboxes data={skillDomains} />

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

/**
 * Skill selection checkboxes that appear when a category is selected
 * A `react-hook-form` Controller is used to register the checkbox group
 * as the component mounts. The checkboxes themselves are registered directly.
 */
const ConditionalCheckboxes = ({ data }) => {
  const { watch, control, register } = useFormContext()
  const { t } = useTranslation()

  /** given an id, returns the category object */
  const getCategoryById = (id) => {
    const category = data.find((cat) => cat.id == id)
    return category
  }

  // when a category is selected, the component is rerendered
  // so we have an updated array of user-selected categories
  const selectedCategories = watch('categories')

  // skillsData is then rendered as a checkbox group for each category
  if (selectedCategories) {
    // i18next-extract-disable
    return (
      <>
        {selectedCategories.map((categoryId) => {
          const category = getCategoryById(categoryId)
          return (
            <Controller
              as={FormInputChoiceBox}
              key={category.name}
              label={t(`form:categories.${category.name}`)}
              control={control}
              name="skills"
              id="skills"
              animate
            >
              {category.skills.map((skill) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                  key={skill.name}
                >
                  <Label>
                    <Checkbox name="skills" value={skill.id} ref={register} />
                    {t(`form:skills.${skill.name}`)}
                  </Label>
                </motion.div>
              ))}
            </Controller>
          )
        })}
      </>
    )
  }

  return null
}
