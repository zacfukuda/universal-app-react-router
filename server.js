import fs from 'fs';
import path from 'path'
import express from 'express'
import React from 'react'
import ReactDOMServer, { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import App from './src/App'
import routes from './src/routes'

const app = express()

// Set view engine & serve static assets
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'build'))
app.use(express.static(path.join(__dirname, 'build')))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	const branch = matchRoutes(routes, req.url)
	const promises = branch.map(({ route, match }) => {
		return route.loadData ? route.loadData(match) : Promise.resolve(null)
	})

	console.log(branch)

	Promise.all(promises).then(data => {
		const context = data
		// console.log(data)
		/*const html = renderToString(
			<StaticRouter
				location={req.url}
				context={data}
			>
				<App/>
			</StaticRouter>
		)

		if(context.url) {
			res.writeHead(301, {
				Location: context.url
			})
			res.end()
		}*/
		let html
		return res.render('index', {html})
	})
})

// Run server
const port = process.env.PORT || 3000
app.listen(port, err => {
	if (err) return console.error(err)
	console.log(`Server listening at http://localhost:${port}`)
})