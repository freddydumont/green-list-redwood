import { db } from 'src/lib/db'

export const createUser = ({ input }) => {
  // validate input {info, skills, availability, emailConfirmation}
  // if ok, create user in db using prisma
  //    - if creation fails, return error
  // if not ok return error
}
