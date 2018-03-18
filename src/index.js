import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import App from './App'
import './index.css'
import routes from './routes'

render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.getElementById('root'))
