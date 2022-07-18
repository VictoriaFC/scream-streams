import React from 'react'
import '../CSS/Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
	return (
		<div className="footer">
			<img className="footer-logo" src={logo}/>
			<h3 className="footer-header">Created by:</h3>
			<p> Trish and Victoria </p><br></br>
			<p>GitHub:  
				<a className="trish-github" href="https://github.com/tfoxcollis">tfoxcollis </a> 
				 and 
				<a className="vic-github" href="https://github.com/VictoriaFC"> VictoriaFC</a> 
				</p>
			<p>LinkedIn:  
				<a href="https://www.linkedin.com/in/trish-fox-collis/">Trish </a> 
				 and 
				<a href="https://www.linkedin.com/in/victoria-fox-collis/"> Victoria</a> 
			</p>
		</div>
	)
}

export default Footer 