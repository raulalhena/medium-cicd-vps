import { render, act, waitFor } from '@testing-library/react';
import App, { dataObj } from '../App';

let result = {
  message: 'Not connected to server'
};

describe('App', () => {
  it('should render with the title visible', async () => {
    const spy = vi.spyOn(dataObj, 'getData').mockReturnValue(Promise.resolve({ message: 'CI/CD pipeline working in VPS!' }));

    await act(async () => {
      result = await dataObj.getData();
    });

    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    expect(spy).toHaveBeenCalledOnce();
    expect(result.message).toBe('CI/CD pipeline working in VPS!');

    const h1 = wrapper.container.querySelector('h1');
    expect(h1).toBeDefined();
    await waitFor(() => { 
      expect(h1?.textContent).toBe('CI/CD pipeline working in VPS!');
    });
  });
});