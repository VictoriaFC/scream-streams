import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Nav = ({ userLogout }) => {
	return (
		<nav className="nav-container">
			<div className="nav-left">
				<NavLink to="/">
					<button className="button">Home</button>
				</NavLink>
				
				{!!sessionStorage.getItem("token") &&
					<Link to="/Favorites" className="favorite-button">
						<button className="button">WATCH LIST</button>
					</Link>
				}
			</div>
			<div className="nav-right">
			{!sessionStorage.getItem("token") &&
        <Link to="/Login">
				  <button className="button">Login</button>
        </Link>
			}
			{!!sessionStorage.getItem("token") &&
				<button className="button" onClick={(event) => userLogout(event)}>Logout</button>
			}
			{!sessionStorage.getItem("token") &&
        <Link to="/SignUp">
				  <button className="button">Sign Up</button>
        </Link>
			}
			</div>
		</nav>
	)
}

export default Nav