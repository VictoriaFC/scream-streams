import React, { Component } from 'react'
import '../CSS/App.css'
import Movies from './Movies'
import MoviePreview from './MoviePreview'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
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
    if(this.state.displaySelected){
      this.setState({displaySelected: false})
    }else{
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=44887bea2881cacd3e7aa9c9a1e39222`)
      .then(response => response.json())
      .then(data => {
        this.setState({selectedMovie: data, displaySelected: true})
      })
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
        movieData={this.state.selectedMovie}
        handleChange={this.handleChange}
      />
    )
  }

  render(){
    return(
      <main className="App">
				<Nav />
				<Header />
        {/* <h1>Dont close your eyes</h1> */}
				{this.state.error && <h3>{this.state.error}</h3>}
        {this.state.isLoading && <h2>Loading</h2>}
        { this.state.displaySelected ? 
          this.renderMoviePreview() :
          <Movies movies={this.state.movies} handleChange={this.handleChange}  />
        }
			<Footer />
      </main>
    )
  }	
}

export default App
