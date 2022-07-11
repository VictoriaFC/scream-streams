import React from 'react'
import '../CSS/Nav.css'

const Nav = () => {
	return (
		<nav className="nav-container">
			<button>Login</button>
			<button>Favorites</button>
			<select>
        <option value="thrillers">Sort</option>
				<option value="thrillers">lowest to highest ratings</option>
				<option value="thrillers">highest to lowest ratings</option>
				<option value="thrillers">newest to oldest ratings</option>
				<option value="thrillers">oldest to newest ratings</option>
			</select>
		</nav>
	)
}

export default Nav