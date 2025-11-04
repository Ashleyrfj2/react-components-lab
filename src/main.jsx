import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Sun } from 'lucide-react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sun/>
    <App />
  </StrictMode>,
)
export default App;