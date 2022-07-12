import React from 'react'
import '../CSS/MoviePoster.css'
import { Link } from "react-router-dom"

const MoviePoster = ({id, title, posterImage, average}) => {
	return (
    <Link to={`/MoviePreview/${id}`} >
      <article 
        className="movie-poster"
        >
        <img className="image" src={posterImage} alt={title}></img>
        <h3>{title}</h3>
        <p><b>Rating: {average}</b></p>
      </article>
    </Link>
	)
}

export default MoviePoster