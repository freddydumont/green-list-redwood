import { render, cleanup } from '@testing-library/react'

import StyleGuidePage from './StyleGuidePage'

describe('StyleGuidePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<StyleGuidePage />)
    }).not.toThrow()
  })
})
