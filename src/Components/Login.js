import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"
import '../CSS/Login.css'
import landingImage from '../assets/sinister.gif'

const Login = ({ userLogin }) => {
	return (
    <div className="login-container">
			<img className="login-landing-img"src={landingImage}/>
      <h2 className="login-header">LOGIN</h2><br></br>
			<p>To see your WATCH LIST please login</p><br></br>
      <form className="login-form" onSubmit={(event) => this.postUserInfo(event)}>
					<label> Email:
						<br></br><input type="text" name="email" placeholder="email" id="email" required/>
					</label>
					<label> Password:
						<br></br><input type="password" name="password" placeholder="password" id="password" required/>
					</label>
					<input className="login-button" type="submit" value="Login" onClick={(event) => userLogin(event)} />
				</form>
      <Link to="/" type="button">
        <button className="back-button-login-page">Back to Main</button>
      </Link>
    </div>
	)
}

export default Login