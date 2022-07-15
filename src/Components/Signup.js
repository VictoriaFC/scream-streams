import React, { Component } from 'react'
import '../CSS/Nav.css'
import '../CSS/SignUp.css'
import { Link } from "react-router-dom"
import { Redirect } from 'react-router-dom'

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
		const url = 'https://foxc-movies-api.herokuapp.com/api/v1/users'
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
				<h2>Signup</h2>
				<form className="signup-form" onSubmit={(event) => this.postUserInfo(event)}>
					<label> Name:
						<input type="text" name="name" placeholder="name" onChange={(event) => this.createName(event)} required/>
					</label>
					<label> Email:
						<input type="text" name="email" placeholder="email" onChange={(event) => this.createEmail(event)} required/>
					</label>
					<label> Password:
						<input type="password" name="password" placeholder="password" onChange={(event) => this.createPassword(event)} required/>
					</label>
					<input type="submit" value="Create Account" />
				</form>
				<Link to="/" type="button">
					<button className="back-button">Back to Main</button>
				</Link>
			</div>
		)
	}
}

export default Signup