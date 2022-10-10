import { render, screen } from '@testing-library/react'
import Copyright from './Copyright'

test('copyright date extends if current year is greater than initial year', () => {
  render(<Copyright />)
  const dates = screen.getByText('20')
  jest.useFakeTimers()
  jest.setSystemTime(new Date('2023-01-01'))
  expect(dates).toHaveTextContent('2022 - 2023')
})
