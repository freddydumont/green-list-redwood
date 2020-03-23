export const schema = gql`
  type Skill {
    id: Int!
    name: String!
    domain: SkillDomain!
    # users: [User]
  }

  type Query {
    skills: [Skill]
  }

  input SkillInput {
    name: String
    domain: Int
    users: Int
  }
`
