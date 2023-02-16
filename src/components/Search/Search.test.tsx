import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('search component', () =>{
  test('renders correctly', () => {
    render(<Search />);
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
  });

  // test('callback is called correctly', () => {
  //   const mockedOnChange = jest.fn();
  //   render(<Search value="" onChange={mockedOnChange}/>);
  //   const inputEl = screen.getByRole('textbox');

  //   userEvent.type(inputEl, 'Javascript');

  //   expect(mockedOnChange).toHaveBeenCalledTimes(10);
  // });
})