import React, { Component } from 'react'
import '../CSS/Nav.css'
import '../CSS/SignUp.css'
import { Link } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import landingImage from '../assets/sinister.gif'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			name: "",
			email: "",
			password: "",
			token: ""
		}
	}

	postUserInfo = (event) => {
		event.preventDefault()	
		const url = `${process.env.REACT_APP_API_URL}/api/v1/users`
		fetch(url, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: {
					email: this.state.email,
					first_name: this.state.name,
					password: this.state.password
				}
			})
		}).then(response => response.json()).then(data => {
			sessionStorage.setItem("token", data.token)
			sessionStorage.setItem("isOfAge", true)
			this.setState({token: data.token})
			this.props.consent()
		}).catch(err => console.log(err.message));
	}

	createName = (event) => {
		sessionStorage.setItem("name", event.target.value)
		this.setState({name: event.target.value})
	}

	createEmail = (event) => {
		sessionStorage.setItem("email", event.target.value)
		this.setState({email: event.target.value})
	}

	createPassword = (event) => {
		this.setState({password: event.target.value})
	}

	render() {
		return (
			<div className="signup-container">
				{!!this.state.token && <Redirect to="/" />}
				<img className="signup-landing-img" src={landingImage}/>
				<p className="signup-quote" ></p>
				<h2 className="signup-header">Create Account</h2>
				<form className="signup-form" onSubmit={(event) => this.postUserInfo(event)}>
					<label> Name:
						<br></br><input className="signup-name" type="text" name="name" placeholder="name" onChange={(event) => this.createName(event)} required/>
					</label>
					<label> Email:
						<br></br><input className="signup-email" type="text" name="email" placeholder="email" onChange={(event) => this.createEmail(event)} required/>
					</label>
					<label> Password:
						<br></br><input className="signup-password" type="password" name="password" placeholder="password" onChange={(event) => this.createPassword(event)} required/>
					</label>
					<input className="create-account-button" type="submit" value="Create Account" />
				</form>
				<Link to="/" type="button">
					<button className="back-button-signup-page">Back to Main</button>
				</Link>
			</div>
		)
	}
}

export default Signup