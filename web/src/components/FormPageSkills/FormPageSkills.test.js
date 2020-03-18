import { skillSchema } from './FormPageSkills'

describe('skillSchema', () => {
  it("should be invalid because categories and skills keys don't match", () => {
    const formData = {
      _hidden: '',
      categories: ['kitchen'],
      skills: {
        maintenance: {
          test: true,
        },
      },
      other: 'test',
      consent: false,
    }

    expect.assertions(1)

    return expect(
      skillSchema.isValid(formData, { context: skillSchema.cast(formData) })
    ).resolves.toBe(false)
  })

  it('should be invalid because categories is empty and skills exist', () => {
    const formData = {
      _hidden: '',
      categories: [],
      skills: {
        maintenance: {
          test: true,
        },
      },
      other: 'test',
      consent: false,
    }

    expect.assertions(1)

    return expect(
      skillSchema.isValid(formData, { context: skillSchema.cast(formData) })
    ).resolves.toBe(false)
  })

  it('should be valid when categories and skills match', () => {
    const formData = {
      _hidden: '',
      categories: ['kitchen'],
      skills: {
        kitchen: {
          test: true,
        },
      },
      other: 'test',
      consent: false,
    }

    expect.assertions(1)

    return expect(
      skillSchema.isValid(formData, { context: skillSchema.cast(formData) })
    ).resolves.toBe(true)
  })

  it('should be valid when categories is empty and skills is undefined', () => {
    const formData = {
      _hidden: '',
      categories: [],
      other: 'test',
      consent: false,
    }

    expect.assertions(1)

    return expect(
      skillSchema.isValid(formData, { context: skillSchema.cast(formData) })
    ).resolves.toBe(true)
  })
})
