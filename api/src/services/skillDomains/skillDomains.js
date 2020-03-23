export const skillDomains = () => {
  return db.skillDomain.findMany({
    include: {
      skills: {},
    },
  })
}
