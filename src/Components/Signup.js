import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"


const Signup = () => {
	return (
    <div>
      <h2>Signup</h2>
      <Link to="/" type="button">
        <button className="back-button">Back to Main</button>
      </Link>
    </div>
	)
}

export default Signup