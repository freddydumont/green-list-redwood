import { render, cleanup } from '@testing-library/react'

import NavBar from './NavBar'

describe('NavBar', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NavBar />)
    }).not.toThrow()
  })
})
