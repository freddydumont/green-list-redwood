import { render, cleanup } from '@testing-library/react'

import GlobalLayout from './GlobalLayout'

describe('GlobalLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<GlobalLayout />)
    }).not.toThrow()
  })
})
