import { createRoot } from 'react-dom/client'
import './assets/css/tailwind.css'
import './i18n'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
