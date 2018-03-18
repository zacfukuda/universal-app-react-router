import React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Header from '../Header'

const Book = ({route}) => (
  <div>
    <Header route={route} />
		{renderRoutes(route.routes)}
  </div>
)

export default Book
