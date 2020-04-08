import { render, cleanup } from '@testing-library/react'

import CellLoading from './CellLoading'

describe('CellLoading', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CellLoading />)
    }).not.toThrow()
  })
})
