import { render } from '@testing-library/react';
import App from 'App';

describe('Smoke Test', () => {
  it('should render the app', () => {
    render(<App />);

    expect(document.querySelector('.App')).toBeInTheDocument();
  });
});
