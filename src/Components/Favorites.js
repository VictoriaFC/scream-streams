import React from 'react'
import '../CSS/Movies.css'
import MoviePoster from './MoviePoster'
import { Link } from "react-router-dom"


const Movies = (props) => {
  const movies = props.movies.filter(movie => movie.favorite )
  const movieData = movies.map(movie => {
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
    <div className="movies">
      {movieData.length ? movieData :
      <div>
        <h2>No Favorites</h2>
        <Link to="/" type="button">
          <button className="back-button">Back to Main</button>
        </Link>
      </div>
      }
    </div>
	)
}

export default Movies 