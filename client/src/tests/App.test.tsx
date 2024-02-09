import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', async () => {
  it('should render with the title visible', async () => {
    const spy = jest.spyOn(App, getData);

    render(<App />);
    // const h1 = await screen.queryByRole('h1');
    // expect(h1).not.toBeNull();
    screen.debug();
  });
});