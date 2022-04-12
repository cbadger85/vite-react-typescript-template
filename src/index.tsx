import App from 'App';
import { createRoot } from 'react-dom/client';

async function main() {
  const container = document.getElementById('root');

  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
}

main();
