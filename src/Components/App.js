import React, { Component } from 'react'
import '../CSS/App.css'
import Movies from './Movies'
import MoviePreview from './MoviePreview'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import loadingGif from '../assets/loading.gif'
import { Route, Switch } from 'react-router-dom';



class App extends Component {
	constructor() {
		super()
		this.state = {
			movies: [],
			innerWidth: window.innerWidth, 
			error: '',
      isLoading: true
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

  renderMoviePreview(movie) {
    return (
      <MoviePreview 
        id={movie.id}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        posterPath={movie.poster_path}
        runtime={movie.runtime}
        genres={movie?.genres?.length ? movie.genres[0].name : ""}
        voteAverage={movie.vote_average}
        tagline={movie.tagline}
        overview={movie.overview}
        handleChange={this.handleChange}
      />
    )
  }

  render(){
    return(
      <main className="App">
				<Nav />
				<Header />
				{this.state.error && <h3>{this.state.error}</h3>}
        {this.state.isLoading && <img className="loading-gif" src={loadingGif}/>}
        <Switch>
          <Route exact path="/" render={() => <Movies movies={this.state.movies} />}/>
          <Route path="/MoviePreview/:id" render={({ match }) => <MoviePreview id={parseInt(match.params.id)} />}/>
        </Switch>
			<Footer />
      </main>
    )
  }	
}

export default App
