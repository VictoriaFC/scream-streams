import React from 'react'
import '../CSS/Header.css'
import logo from '../assets/logo.png'


const Header = () => {
	return (
		<div className="header-container">
			<img className="logo" src={logo}/>
			<h2 className="header-welcome"><b>WELCOME TO SCREAM STREAMS</b></h2><br></br>
			<p className="header-message"><b>Walls have ears. Doors have eyes. Trees have voices. Beasts tell lies. Beware the rain. Beware the snow. Beware the man you think you know.</b></p>
		</div>
	)
}

export default Header