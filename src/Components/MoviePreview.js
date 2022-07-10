import React from 'react'
import '../CSS/MoviePreview.css'

const MoviePreview = ({ movieData, handleChange }) => {
	return (
		<main className="preview-container" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`}}>
			<div className="preview">
				<article className="display-left" onClick={() => handleChange(movieData.title)}>
					<img className="movie-image" src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={movieData.title}></img>
				</article>
				<article className="display-right">
					<h2 className="movie-title">{movieData.title}</h2>
					<p className="movie-info">Average: {movieData.vote_average}</p>
				</article>
			</div>
		</main>

	)
}

export default MoviePreview