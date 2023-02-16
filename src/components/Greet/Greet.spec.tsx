import { render, screen } from "@testing-library/react";
import Greet from './Greet';


describe('Greet', () => {
  //xit is used when we want to skip the test
  xit('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
  
  
  //fit is used when we want to only execute this test
  fit('renders with a name', () => {
    render(<Greet name='Vishal'/>);
    const textElement = screen.getByText('Hello Vishal');
    expect(textElement).toBeInTheDocument();
  });
})

