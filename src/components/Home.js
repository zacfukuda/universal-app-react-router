import React from 'react'
import Header from './Header'

const Home = ( { route} ) => (
	<div>
    <Header route={route} />
		<h2>Home</h2>
    {
      console.log('route: ', route)
    }
		<p>Hi</p>
		<p>If you are seeing this message, your universal application is properly running. Please keep on checking by cliking the link buttons inside the header, which were generated from the <em>Link</em> element of React Router.</p>
	</div>
)

export default Home
