/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

const log = require('./utils')

dotenv.config()
const db = new PrismaClient()

let count = {
  found: 0,
  created: 0,
}

const availabilities = [
  'seasonal',
  'betweenCourses',
  'courses',
  'dayZero',
  'remote',
]

const skills = {
  // kitchen are questions, let's just call them q1...q8, and the translation
  // file will handle the displayed name
  kitchen: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'],
  maintenance: [
    'plumbing',
    'electricity',
    'painting',
    'carpentry',
    'mechanic',
    'architecture',
  ],
  technology: ['sysadmin', 'networking', 'software', 'support'],
  accounting: ['accounting', 'bookkeeping'],
}

const skillDomains = Object.keys(skills)

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
      count.found++
    } else {
      const created = await db.availability.create({
        data: {
          name,
        },
      })

      log.created('Availability', name, created)
      count.created++
    }
  }

  log.end('Availabilities')
}

/** Seed skill domains. Skills will be connected when we create them */
async function seedSkillDomains() {
  log.start('Skill Domains')
  for (let name of skillDomains) {
    const data = await db.skillDomain.findOne({
      where: {
        name,
      },
    })

    if (data) {
      log.found('Skill Domain', name, data)
      count.found++
    } else {
      const created = await db.skillDomain.create({
        data: {
          name,
        },
      })

      log.created('Skill Domain', name, created)
      count.created++
    }
  }

  log.end('Skill Domains')
}

async function seedSkills() {
  log.start('Skills')

  for (let skillDomain of skillDomains) {
    for (let name of skills[skillDomain]) {
      const data = await db.skill.findOne({
        where: {
          name,
        },
      })

      if (data) {
        log.found('Skills', name, data)
        count.found++
      } else {
        const created = await db.skill.create({
          data: {
            name,
            domain: {
              connect: {
                name: skillDomain,
              },
            },
          },
        })

        log.created('Skills', name, created)
        count.created++
      }
    }
  }

  log.end('Skills')
}

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it).

  await seedAvailabillities()
  await seedSkillDomains()
  await seedSkills()
  log.count(count)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.disconnect()
  })
