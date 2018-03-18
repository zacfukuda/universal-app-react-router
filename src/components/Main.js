import React from 'react'
import { renderRoutes } from 'react-router-config'

const Main = ( { routes }) => (
	<main>
    {renderRoutes(routes)}
	</main>
)

export default Main
