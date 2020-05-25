import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import BragsScreen from '.'

describe('BragsScreen', () => {
  test('Should match snapshot', () => {
    const { container } = render(<BragsScreen />)
    expect(container).toMatchSnapshot()
  })

  test('Should add brag to list on submit', async () => {
    render(<BragsScreen />)
    const newBrag = 'Made a carrot cake'
    const input = screen.getByLabelText(/brag/i)
    const form = screen.getByTestId('brag-form')

    fireEvent.change(input, { target: { value: newBrag } })
    await waitFor(() => input)

    fireEvent.submit(form)
    await waitFor(() =>
      expect(screen.getByRole('listitem')).toHaveTextContent(newBrag)
    )
  })
})
