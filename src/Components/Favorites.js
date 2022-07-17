import React, { Component } from 'react'
import '../CSS/Favorites.css'
import MoviePoster from './MoviePoster'

class Favorites extends Component {
  constructor() {
    super()
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    // this.getStateFromSessionStorage();
		fetch("https://foxc-movies-api.herokuapp.com/api/v1/favorites", {
      headers: {
        "Authorization": `Bearer ${sessionStorage.token}`
      }
    })
		.then(response => response.json())
		.then(data => {
			this.setState({favorites: data.favorites})
		})
  }
    // this.state.favorites == ["76999", "12345"]
    // filter through movies and only keep the movie if its id === any id in this.state.favorites.
  favMovies = () => {
    return this.state.favorites.map((movie) => {
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
  }

  render(){
    return (
     <div className="watch-list">
       {this.favMovies()}
      </div>
    )
  }
}

export default Favorites 