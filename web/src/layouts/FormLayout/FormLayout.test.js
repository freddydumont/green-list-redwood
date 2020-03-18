import { render, cleanup } from '@testing-library/react'

import FormLayout from './FormLayout'

describe('FormLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FormLayout />)
    }).not.toThrow()
  })
})
