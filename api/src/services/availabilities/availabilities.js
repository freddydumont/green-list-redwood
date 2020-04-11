import { db } from 'src/lib/db'

export const availabilities = () => {
  return db.availability.findMany()
}
