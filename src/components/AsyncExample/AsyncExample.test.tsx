import { render, screen } from '@testing-library/react';
import AsyncExample from './AsyncExample';

describe('AsyncExample Component', () => {
  it('renders correctly', () => {
    render(<AsyncExample/>);
    const headingEl = screen.getByRole('heading', {
      level: 1
    });
    expect(headingEl).toBeInTheDocument();
  })


  //test that a list of todos is rendered
  
})