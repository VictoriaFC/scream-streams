import React from 'react'
import '../CSS/Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
	return (
		<div className="footer">
			<img className="footer-logo" src={logo}/>
			<h3 className="footer-header">Created by:</h3>
			<p> Trish and Victoria </p><br></br>
			<p>GitHub Usernames: tfoxcollis and VictoriaFC</p>
		</div>
	)
}

export default Footer 