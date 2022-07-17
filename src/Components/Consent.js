import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Consent.css"
import logo from '../assets/logo.png'
import landingImage from '../assets/eye.gif'

const Consent = ({ consent }) => {
  return(
    <div className="consent-container">
			<img className="consent-logo" src={landingImage}/>
			<h2 className="consent-header">Welcome to Scream Streams.</h2><br></br>
			<h3>Looking for some good scary movies to watch?</h3><br></br>
			<h4 className="consent-message">Before we let you enter... we gotta ask. 
				Are you old enough to be watching scary movies? 
				By checking the box below you are confirming you are at least 17 years old AND 
				that we are not liable for your NIGHTMARES.</h4>
			<input className="consent-checkbox" type="checkbox"/>
      <Link to="/" className="consent-button">
        <br></br><input className="consent-button" type="submit" name="consent" value="CONTINUE" onClick={consent}/>
      </Link>
    </div>
  )
}

export default Consent