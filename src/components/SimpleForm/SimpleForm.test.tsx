import { SimpleForm } from './SimpleForm'
import { render, screen } from '@testing-library/react'

describe('SimpleForm', () => {
  test('renders as expected', () => {
    render(<SimpleForm />);
    //Check if input element is present or not
    // const FirstName = screen.getByRole('textbox');
    // const fristEl = screen.getByRole('textbox', {
    //   name: 
    // });
    // expect(fristEl).toBeInTheDocument();
    const firstNameEl = screen.getByLabelText('First Name');
    expect(firstNameEl).toBeInTheDocument();

    //using getByDisplayValue
    const name2 = screen.getByDisplayValue('Vishal');
    expect(name2).toBeInTheDocument();

    //Check for the select html element
    const locationEl = screen.getByRole('combobox');
    expect(locationEl).toBeInTheDocument();

    //For button Element
    const buttonEl = screen.getByRole('button', {
      name: 'Submit'
    });
    expect(buttonEl).toBeInTheDocument();

    //For terms and condition checkbox
    const termsEl = screen.getByLabelText('I agree to the terms and conditions');
    expect(termsEl).toBeInTheDocument();

    //using role for checkbox

    //Check for paragraph
  })
})