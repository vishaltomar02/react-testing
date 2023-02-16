import { render, screen } from '@testing-library/react';
import ListComponent from './ListComponent';

describe('List Component', () => {
  const listItems = ['Ronaldo', 'Messi', 'Lewandowski', 'Mbappe', 'Neymar', 'Benzema', 'Suarez'];

  test('renders as expected', () => {
    render(<ListComponent listItems={listItems}/>);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  //test all the list items to have length of listItems

  test('the length of list is as expected', () => {
    render(<ListComponent listItems={listItems}/>);
    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(listItems.length);
  })

  //test login button is rendered or not
  test('logIn button is rendered', () => {
    render(<ListComponent listItems={listItems} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login'
    });
    expect(loginButton).toBeInTheDocument();
  });

  //test that initially the streaming button is not rendered
    test('streaming button is not present initially', () => {
    render(<ListComponent listItems={listItems} />);
    const loginButton = screen.queryByRole('button', {
      name: 'Start Streaming'
    });
    expect(loginButton).not.toBeInTheDocument();
  });


  //test the streaming button is eventually rendered

   test('streaming button is eventually rendered', async () => {
    render(<ListComponent listItems={listItems} />);
    const loginButton = await screen.findByRole('button', {
      name: 'Start Streaming'
    },{ timeout: 2000 });
    expect(loginButton).toBeInTheDocument();
  });


})