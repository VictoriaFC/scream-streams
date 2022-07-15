import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"


const Nav = () => {
	return (
		<nav className="nav-container">
			<div className="nav-left">
				{!!localStorage.getItem("token") &&
					<Link to="/Favorites" className="favorite-button">
						<button className="button">Favorites</button>
					</Link>
				}
			</div>
			<div className="nav-right">
			{!localStorage.getItem("token") &&
        <Link to="/Login">
				  <button className="login-button">Login</button>
        </Link>
			}
			{!!localStorage.getItem("token") &&
        <Link to="/Logout">
				  <button className="login-button">Logout</button>
        </Link>
			}
			{!localStorage.getItem("token") &&
        <Link to="/SignUp">
				  <button className="signup-button">Sign Up</button>
        </Link>
			}
			</div>
		</nav>
	)
}

export default Nav