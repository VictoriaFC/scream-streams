import React, { Component } from 'react'
import '../CSS/App.css'
import Movies from './Movies'

class App extends Component {
	constructor() {
		super()
		this.state = {
			movies: []
		}
	}



  render(){
    return(
      <main className="App">
        <h1>Dont close your eyes</h1>
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App
