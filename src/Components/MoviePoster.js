import React from 'react'
import '../CSS/MoviePoster.css'

const MoviePoster = ({id, title, posterImage, average, handleChange}) => {
	return (
    <article 
      className="movie-poster"
      onClick={() => handleChange(id)}>
      <img className="image" src={posterImage} alt={title}></img>
      <h3>{title}</h3>
      <p><b>Rating: {average}</b></p>
    </article>

	)
}

export default MoviePoster