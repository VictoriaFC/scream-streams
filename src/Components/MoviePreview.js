import React from 'react'
import '../CSS/MoviePreview.css'

const MoviePreview = ({ movieData, handleChange }) => {
	return (
		<main className="preview-container">
			<article style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`}}onClick={() => handleChange(movieData.title)}>
				<h2>{movieData.title}</h2>
				<img className="image" src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={movieData.title}></img>
				<p>Average: {movieData.vote_average}</p>
			</article>
		</main>

	)
}

export default MoviePreview