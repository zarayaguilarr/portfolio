import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

console.log('Portfolio app starting...');
const root = document.getElementById('root');
console.log('Root element:', root);

try {
  createRoot(root!).render(
    <StrictMode>
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
  console.log('Portfolio app rendered successfully');
} catch (e) {
  console.error('Failed to render app:', e);
}
