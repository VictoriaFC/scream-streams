import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Consent.css"


const Consent = ({ consent }) => {
  return(
    <div className="consent-container">
      <h1>Consent Message</h1>
      <Link to="/" className="checkbox">
        <input type="checkbox" onClick={consent}/>
      </Link>
    </div>
  )
}

export default Consent