import React from 'react'
import '../CSS/Nav.css'
import { Link } from "react-router-dom"


const Logout = () => {
	return (
    <div>
      <h2>Logout</h2>
      <Link to="/" type="button">
        <button className="back-button">Back to Main</button>
      </Link>
    </div>
	)
}

export default Logout