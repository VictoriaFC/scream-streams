import React from 'react'
import '../CSS/MoviePoster.css'

const MoviePoster = ({title, posterImage, average}) => {
	return (
    <article className="movie-poster">
      <img className="image" src={posterImage} alt></img>
      <h3>{title}</h3>
      <p>Average: {average}</p>
      
    </article>

	)
}

export default MoviePoster