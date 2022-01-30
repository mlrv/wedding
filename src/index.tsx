import './index.css'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './main/App'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
