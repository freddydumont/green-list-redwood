import { render, cleanup } from '@testing-library/react'

import FormNavButton from './FormNavButton'

describe('FormNavButton', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FormNavButton />)
    }).not.toThrow()
  })
})
