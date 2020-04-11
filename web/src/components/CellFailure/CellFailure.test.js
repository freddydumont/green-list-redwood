import { render, cleanup } from '@testing-library/react'

import CellFailure from './CellFailure'

describe('CellFailure', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CellFailure />)
    }).not.toThrow()
  })
})
