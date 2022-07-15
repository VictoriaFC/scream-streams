import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"


const Login = ({ userLogin }) => {
	return (
    <div>
      <h2>Login</h2>
      <form className="signup-form" onSubmit={(event) => this.postUserInfo(event)}>
					<label> Email:
						<input type="text" name="email" placeholder="email" id="email" required/>
					</label>
					<label> Password:
						<input type="password" name="password" placeholder="password" id="password" required/>
					</label>
					<input type="submit" value="Login" onClick={(event) => userLogin(event)} />
				</form>
      <Link to="/" type="button">
        <button className="back-button">Back to Main</button>
      </Link>
    </div>
	)
}

export default Login