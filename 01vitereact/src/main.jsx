import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import All from './ib.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <All />
    <App/>
  </StrictMode>,
)
