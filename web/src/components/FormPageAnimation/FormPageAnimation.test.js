import { render, cleanup } from '@testing-library/react'

import FormPageAnimation from './FormPageAnimation'

describe('FormPageAnimation', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FormPageAnimation />)
    }).not.toThrow()
  })
})
