import { render, cleanup } from '@testing-library/react'

import Hero from './Hero'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Hero />)
    }).not.toThrow()
  })
})
