import { useFormContext } from 'react-hook-form'

import CellLoading from '../CellLoading/CellLoading'
import CellFailure from '../CellFailure/CellFailure'
import { FormInputChoice, FormField } from '../FormComponents/FormComponents'

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
 * @param {Object} props
 * @param {Object} props.data skillDomains object
 */
const ConditionalCheckboxes = ({ data }) => {
  const { watch } = useFormContext()

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
            <FormInputChoice
              key={category.name}
              type="checkbox"
              name={categoryId}
              options={category.skills.map((skill) => ({
                label: skill.name,
                value: skill.id,
              }))}
            />
          )
        })}
      </>
    )
  }

  return null
}
