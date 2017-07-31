import fs from 'fs';
import path from 'path'
import express from 'express'
import React from 'react'
import ReactDOMServer, { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './src/App'

const app = express()

// Set view engine & serve static assets
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'build'))
app.use(express.static(path.join(__dirname, 'build')))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	const context = {}
	
	// A little bit cheating to load the data
	fs.readFile('./build/books.json', 'utf-8', (err, content) => {
		if(!err) {
			context.books = JSON.parse(content).books

			const html = renderToString(
				<StaticRouter
					location={req.url}
					context={context}
				>
					<App/>
				</StaticRouter>
			)

			if(context.url) {
				res.writeHead(301, {
		      Location: context.url
		    })
				res.end()
			}

			return res.render('index', {html})
		}
		else res.status(500).end()
	})
})

// Run server
const port = process.env.PORT || 3000
app.listen(port, err => {
	if (err) return console.error(err)
	console.log(`Server listening at http://localhost:${port}`)
})