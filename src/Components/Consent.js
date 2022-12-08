import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../CSS/Consent.css"
import landingImage from '../assets/eye.gif'

const Consent = ({ consent }) => {

  const [checked, setChecked] = useState(false) // initial value of state is false

  const updateCheckbox = () => {

    setChecked(!checked) // setting state, toggles from false to true
    consent()
  }

  return(
    <div className="consent-container">
			<img className="consent-logo" src={landingImage}/>
			<h2 className="consent-header">Welcome to Scream Streams.</h2><br></br>
			<h3>Looking for some scary movies to watch?</h3><br></br>
			<h4 className="consent-message">Before we let you enter... we gotta ask. 
				Are you old enough to be watching scary movies? 
				By checking the box below you are confirming you are at least 17 years old AND 
				that Scream Streams is not liable for your NIGHTMARES.</h4>
			<input className="consent-checkbox" type="checkbox" onChange={() => updateCheckbox()}/>
      {checked && 
      <>
        <Link to="/" className="consent-button">
          <br></br><input className="consent-button-1" type="submit" name="consent" value="ENTER 💀"/>
        </Link>
        <p className="freddy-quote">"1...2...Freddy's coming for you..."</p>
      
      </>
      }
    </div>
  )
}

export default Consent