// import './fonts.css'
import './index.css'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './main/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
