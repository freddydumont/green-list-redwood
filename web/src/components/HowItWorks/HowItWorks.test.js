import { render, cleanup } from '@testing-library/react'

import HowItWorks from './HowItWorks'

describe('HowItWorks', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<HowItWorks />)
    }).not.toThrow()
  })
})
