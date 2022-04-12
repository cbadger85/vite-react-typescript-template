import { createRoot } from 'react-dom/client';
import {} from 'react-dom';
import App from './App';

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
