export const schema = gql`
  type Availability {
    id: Int!
    name: String!
    # users: User
  }

  type Query {
    availabilities: [Availability]
  }

  input AvailabilityInput {
    name: String
    users: Int
  }
`
