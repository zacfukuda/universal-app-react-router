import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Book from './Book/'
import About from './About'
import RedirectWithStatus from './RedirectWithStatus'
import NotFound from './NotFound'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/book' component={Book}/>
			<Route path='/about' component={About}/>
			<RedirectWithStatus  status={301} from="/movie" to="/book"/>
			<Route path='*' component={NotFound}/>
		</Switch>
	</main>
)

export default Main