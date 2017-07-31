import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookAll from './All'
import BookSingle from './Single'

const Book = () => (
	<Switch>
		<Route exact path='/book' component={BookAll}/>
		<Route path='/book/:slug' component={BookSingle}/>
	</Switch>
)

export default Book