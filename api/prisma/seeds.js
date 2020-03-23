/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

const log = require('./utils')

dotenv.config()
const db = new PrismaClient()

const availabilities = [
  'seasonal',
  'betweenCourses',
  'courses',
  'dayZero',
  'remote',
]

const languages = ['fr', 'en']

async function seedAvailabillities() {
  log.start('Availabilities')
  for (let name of availabilities) {
    const data = await db.availability.findOne({
      where: {
        name,
      },
    })

    if (data) {
      log.found('Availability', name, data)
    } else {
      const created = await db.availability.create({
        data: {
          name,
        },
      })

      log.created('Availability', name, created)
    }
  }

  log.end('Availabilities')
}

async function seedLanguages() {
  log.start('Languages')
  for (let name of languages) {
    const data = await db.language.findOne({
      where: {
        name,
      },
    })

    if (data) {
      log.found('Language', name, data)
    } else {
      const created = await db.language.create({
        data: {
          name,
        },
      })

      log.created('Language', name, created)
    }
  }

  log.end('Languages')
}

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it).

  await seedAvailabillities()
  await seedLanguages()
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.disconnect()
  })
