export const skills = () => {
  return db.skill.findMany({
    include: {
      domain: {},
    },
  })
}
