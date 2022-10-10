import { render, screen } from '@testing-library/react'
import Copyright from './Copyright'

test('copyright date extends if current year is greater than initial year', () => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date('2023'))
  render(<Copyright />)
  const copyright = screen.getByText(/20/)
  expect(copyright).toHaveTextContent(/2022 - 2023/)
})
