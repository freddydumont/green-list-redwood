export const schema = gql`
  input UserInfoInput {
    firstName: String!
    lastName: String!
    email: String!
    dateOfBirth: String!
    gender: Gender!
    lang: Lang!
    location: String!
    phone: String
    contactPreference: [ContactPreference!]!
  }

  input UserSkills {
    kitchen: [ID]
    maintenance: [ID]
    technology: [ID]
    accounting: [ID]
  }

  input UserSkillsInput {
    categories: [ID]
    skills: UserSkills
    other: String
    consent: Boolean!
  }

  input UserAvailabilityInput {
    availability: [ID!]!
  }

  input CreateUserInput {
    info: UserInfoInput!
    skills: UserSkillsInput!
    availability: UserAvailabilityInput!
  }

  type Mutation {
    createUser(input: CreateUserInput!): Boolean!
  }
`
