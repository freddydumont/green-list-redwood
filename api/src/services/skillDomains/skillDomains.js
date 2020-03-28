import { db } from 'src/lib/db'

export const skillDomains = () => {
  return db.skillDomain.findMany({
    include: {
      skills: {},
    },
  })
}
