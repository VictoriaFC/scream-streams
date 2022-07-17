import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Nav = ({ userLogout }) => {
	return (
		<nav className="nav-container">
			<div className="nav-left">
				<NavLink to="/">
					<button className="button">HOME</button>
				</NavLink>
				
				{!!sessionStorage.getItem("token") &&
					<Link to="/Favorites" className="favorite-button">
						<button className="button">WATCH LIST</button>
					</Link>
				}
			</div>
			<div className="nav-middle">
			</div>
				{!sessionStorage.getItem("token") &&
					<h3 className="nav-message">Sign up or Login to create a watch list!</h3>
				}
			<div className="nav-right">
			{!sessionStorage.getItem("token") &&
					<Link to="/Login">
						<button className="button">LOGIN</button>
					</Link>
			}
			{!!sessionStorage.getItem("token") &&
				<button className="button" onClick={(event) => userLogout(event)}>LOGOUT</button>
			}
			{!sessionStorage.getItem("token") &&
        <Link to="/SignUp">
				  <button className="button">SIGN UP</button>
        </Link>
			}
			</div>
		</nav>
	)
}

export default Nav