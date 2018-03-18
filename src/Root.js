import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import routes from './routes'
import Main from './components/Main'

const Root = ({ route }) => (
  <div>
    <Main routes={route.routes}/>
  </div>

)

export default Root;
