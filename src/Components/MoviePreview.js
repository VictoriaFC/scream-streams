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
					<p className="movie-genres">{movieData.genres[0].name}</p>
					<p className="movie-info">Average: {movieData.vote_average}</p><br></br>
					<h4 className="tagline"><i>{movieData.tagline}</i></h4><br></br>
					<p className="overview"> <b>Overview:</b><br></br> {movieData.overview}</p>

				</article>
			</div>
		</main>

	)
}

export default MoviePreview