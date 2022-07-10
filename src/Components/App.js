import React, { Component } from 'react'
import '../CSS/App.css'
import Movies from './Movies'
import MoviePreview from './MoviePreview'
import MoviePoster from './MoviePoster'

class App extends Component {
	constructor() {
		super()
		this.state = {
			movies: [],
			innerWidth: window.innerWidth, 
			error: '',
      isLoading: true,
      selectedMovie: "",
      displaySelected: false,
		}
	}

  handleChange = (id) => {
    const selectedPoster = this.state.movies.find(movie => {
      return movie.id === id
    })
    if(this.state.displaySelected){
      this.setState({displaySelected: false})
    }else{
      this.setState({selectedMovie: selectedPoster, displaySelected: true})
    }
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=44887bea2881cacd3e7aa9c9a1e39222&with_genres=27")
    .then(response => response.json())
    .then(data => {
      this.setState({movies: data.results, isLoading: false,})
    })
		.catch(error => { 
			this.setState({error: error.message})
		})
  }

  renderMoviePreview() {
    return (
      <MoviePreview 
        title={this.state.selectedMovie.title}
        overview={this.state.selectedMovie.overview}
        average={this.state.selectedMovie.vote_average}
        votes={this.state.selectedMovie.vote_count}
        releaseDate={this.state.selectedMovie.release_date}
        handleChange={this.handleChange}
        posterImage={`https://image.tmdb.org/t/p/original${this.state.selectedMovie.poster_path}`}
      />
    )
  }

  render(){
    return(
      <main className="App">
        <h1>Dont close your eyes</h1>
				{this.state.error && <h3>{this.state.error}</h3>}
        {this.state.isLoading && <h2>Loading</h2>}
        { this.state.displaySelected ? 
          this.renderMoviePreview() :
          <Movies movies={this.state.movies} handleChange={this.handleChange}  />
        }
      </main>
    )
  }
}

export default App
