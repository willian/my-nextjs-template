import { render, screen } from '@testing-library/react'

import HomePage from '..'

describe('Home page', () => {
  it('should render the welcome message', () => {
    render(<HomePage />)
    expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument()
  })
})
