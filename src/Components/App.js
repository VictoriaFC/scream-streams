import React, { Component } from 'react'
import '../CSS/App.css'
import Movies from './Movies'

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

  render(){
    return(
      <main className="App">
        <h1>Dont close your eyes</h1>
				{this.state.error && <h3>{this.state.error}</h3>}
        {this.state.isLoading && <h2>Loading</h2>}
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App
