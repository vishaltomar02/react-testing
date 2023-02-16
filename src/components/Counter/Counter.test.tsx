import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter, } from './Counter';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter/>);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });
    const counterHeading = screen.getByRole('heading', {
      level: 1
    });

    expect(incrementButton).toBeInTheDocument()
    expect(counterHeading).toBeInTheDocument()
  });

  test('count to be 0 initially', () => {
    render(<Counter/>);
    const counterHeading = screen.getByRole('heading', {
      level: 1
    });

    expect(counterHeading).toHaveTextContent(`Count is: 0`);
  });


  //test the count when its clicked for once
  test('count becomes 1 when clicked for once', async () => {
    render(<Counter/>);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });

    await userEvent.click(incrementButton);
    const counterHeading = screen.getByRole('heading', {
      level: 1
    });

    expect(counterHeading).toHaveTextContent(`Count is: 1`);
  })



  //test that the count becomes the value that is entered in the input
  test('count becomes the value entered in the input', async () => {
    render(<Counter />);
    const inputEl = screen.getByRole('spinbutton');
    const amountButton = screen.getByRole('button', {
      name: 'Set Amount'
    })
     const counterHeading = screen.getByRole('heading', {
      level: 1
    });
    await userEvent.type(inputEl, '7');
    expect(inputEl).toHaveValue(7);

    await userEvent.click(amountButton);
    expect(counterHeading).toHaveTextContent('Count is: 7');
  })
});