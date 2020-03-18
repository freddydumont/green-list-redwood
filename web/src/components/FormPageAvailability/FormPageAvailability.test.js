import { render, cleanup } from '@testing-library/react'

import FormPageAvailability from './FormPageAvailability'

describe('FormPageAvailability', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FormPageAvailability />)
    }).not.toThrow()
  })
})
