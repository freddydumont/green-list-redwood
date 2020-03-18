import { render, cleanup } from '@testing-library/react'

import FormPageLayout from './FormPageLayout'

describe('FormPageLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FormPageLayout />)
    }).not.toThrow()
  })
})
