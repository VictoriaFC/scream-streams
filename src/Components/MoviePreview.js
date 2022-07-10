import React from 'react'
import '../CSS/MoviePreview.css'

const MoviePreview = ({ title, overview, posterImage, votes, releaseDate, average, handleChange}) => {
	return (
    <article onClick={() => handleChange(title)}>
      <h2>{title}</h2>
      <img className="image" src={posterImage} alt={title}></img>
      <h3>{title}</h3>
      <p>Average: {average}</p>
    </article>

	)
}

export default MoviePreview