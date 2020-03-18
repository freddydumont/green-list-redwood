import { userSchema } from './FormPageInfo'

describe('userSchema', () => {
  it('should be invalid', () => {
    expect.assertions(1)
    return expect(
      userSchema.isValid({
        name: 'jimmy',
        age: 24,
      })
    ).resolves.toBe(false)
  })

  it('should be valid', () => {
    expect.assertions(1)
    return expect(
      userSchema.isValid({
        _hidden: '',
        contactPreference: ['email', 'phone'],
        phone: '555-555-5555',
        location: 'Levis',
        gender: 'male',
        dateOfBirth: '2020-01-09T05:00:00.000Z',
        email: 'test@example.com',
        lastName: 'Morin',
        firstName: 'Frédérick',
      })
    ).resolves.toBe(true)
  })
})
