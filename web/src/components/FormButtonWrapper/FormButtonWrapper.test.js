import { render, cleanup } from '@testing-library/react'

import FormButtonWrapper from './FormButtonWrapper'

describe('FormButtonWrapper', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FormButtonWrapper />)
    }).not.toThrow()
  })
})
