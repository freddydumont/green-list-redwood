export const schema = gql`
  type SkillDomain {
    id: Int!
    name: String!
    skills: [Skill]
    # users: [User]
  }

  type Query {
    skillDomains: [SkillDomain]
  }

  input SkillDomainInput {
    name: String
    skills: Int
    users: Int
  }
`
