import React from 'react'
import '../CSS/Movies.css'
import MoviePoster from './MoviePoster'
import { withRouter } from 'react-router'

const Movies = (props) => {
  const movieData = props.movies.map(movie => {
    return (<MoviePoster
    id={movie.id}
    title={movie.title}
    overview={movie.overview}
    average={movie.vote_average}
    votes={movie.vote_count}
    releaseDate={movie.release_date}
    posterImage={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
    key={movie.id}
    />)
  })
	return (
    <div className="movies-container">
      {movieData}
    </div>
	)
}

export default withRouter(Movies) 