import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"


const Nav = () => {
	return (
		<nav className="nav-container">
			<div className="nav-left">
				<button className="button">Favorites</button>
				<select className="button">
					<option value="sort">Sort</option>
					<option value="sort-low-high">lowest to highest ratings</option>
					<option value="sort-high-low">highest to lowest ratings</option>
					<option value="sort-new-old">newest to oldest ratings</option>
					<option value="sort-old-new">oldest to newest ratings</option>
				</select>
			</div>
			<div className="nav-right">
				<button className="login-button">Login</button>
				<button className="signup-button">Sign Up</button>
			</div>
		</nav>
	)
}

export default Nav