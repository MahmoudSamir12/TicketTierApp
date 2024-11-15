import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios'
import { BrowserRouter } from "react-router-dom";


axios.defaults.baseURL="https://localhost:7148/api/Tickets";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
