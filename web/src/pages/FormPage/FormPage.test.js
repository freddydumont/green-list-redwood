import { render, cleanup } from '@testing-library/react'

import FormPage from './FormPage'

describe('FormPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FormPage />)
    }).not.toThrow()
  })
})
