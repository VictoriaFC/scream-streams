import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"


const Nav = ({ userLogout }) => {
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
				<button className="logout-button" onClick={(event) => userLogout(event)}>Logout</button>
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