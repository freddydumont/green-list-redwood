import { screen } from '@testing-library/react'

function fillFormPageInfo() {
  screen.getByLabelText(/First Name/i).value = 'Johnny'
  screen.getByLabelText(/Last Name/i).value = 'Bravo'
  // email field
  screen.getAllByLabelText(/email/i)[0].value = 'hunter2@hotmail.com'
  screen.getByLabelText(/date of birth/i).value = '1992-05-18'
  screen.getByLabelText('Male').click()
  screen.getByLabelText(/city/i).value = 'Minnesota'
  screen.getByLabelText(/phone number/i).value = '555-555-5555'
  // email contact preference
  screen.getAllByLabelText(/email/i)[1].click()
}

export { fillFormPageInfo }
