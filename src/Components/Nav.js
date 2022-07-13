import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"


const Nav = () => {
	return (
		<nav className="nav-container">
			{/* <div className="nav-left">
        <Link to="/Favorites" className="favorite-button">
				  <button className="button">Favorites</button>
        </Link>
				<select className="button">
					<option value="sort">Sort By</option>
					<option value="sort-low-high">lowest to highest ratings</option>
					<option value="sort-high-low">highest to lowest ratings</option>
					<option value="sort-new-old">newest release date</option>
					<option value="sort-old-new">oldest release date</option>
				</select>
			</div>
			<div className="nav-right">
        <Link to="/Login">
				  <button className="login-button">Login</button>
        </Link>
        <Link to="/Logout">
				  <button className="login-button">Logout</button>
        </Link>
        <Link to="/SignUp">
				  <button className="signup-button">Sign Up</button>
        </Link>
			</div> */}
		</nav>
	)
}

export default Nav