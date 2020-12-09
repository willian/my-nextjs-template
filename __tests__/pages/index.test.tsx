import React from 'react'
import { render, screen } from 'core/utils/test'
import Home from '../../pages/index'

describe('Home', () => {
  it('renders "Hello World"', () => {
    render(<Home />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
