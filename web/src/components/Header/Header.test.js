import { render, cleanup } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Header />)
    }).not.toThrow()
  })
})
