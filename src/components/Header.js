import React from 'react'
import { Link } from 'react-router-dom'

const Header = ( { route} ) => (
	<header>
		<h1>Universal React App</h1>
		<nav>
			<ul>
				<li><Link className={route.path==='/' ? 'active' : ''} to='/'>Home</Link></li>
				<li><Link className={route.path==='/book' ? 'active' : ''} to='/book'>Book</Link></li>
				<li><Link className={route.path==='/about' ? 'active' : ''} to='/about'>About</Link></li>
				<li><Link to='/movie'>Movie/Redirect</Link></li>
				<li><Link to='/foo'>404</Link></li>
			</ul>
		</nav>
	</header>
)

export default Header
