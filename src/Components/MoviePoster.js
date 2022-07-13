import React from 'react'
import '../CSS/MoviePoster.css'
import { Link } from "react-router-dom"

const MoviePoster = ({id, title, posterImage, average}) => {
	return (
    <article className="movie-poster-container">
      <Link className="movie-poster" to={`/MoviePreview/${id}`} >
        <img className="movie-poster-image" src={posterImage} alt={title}></img>
      </Link>
			<p className="movie-rating-main"><b>{average}%</b></p>
			<h3 className="movie-title-main">{title}</h3>
    </article>
	)
}

export default MoviePoster