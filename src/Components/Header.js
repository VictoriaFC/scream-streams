import React from 'react'
import '../CSS/Header.css'
import background from '../assets/header-background.jpeg'

const Header = () => {
	return (
		<div className="header-container" style={{backgroundImage: `url('https://data.whicdn.com/images/360077678/original.gif')`}}>
			<h2 className="header-welcome">Welcome Horror Movie Lovers</h2>
			<p className="header-message">Walls have ears. Doors have eyes. Trees have voices. Beasts tell lies. Beware the rain. Beware the snow. Beware the man you think you know.</p>

		</div>
	)
}

export default Header