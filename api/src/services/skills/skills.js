import { db } from 'src/lib/db'

export const skills = () => {
  return db.skill.findMany({
    include: {
      domain: {},
    },
  })
}
