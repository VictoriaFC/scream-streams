import React, { Component } from 'react'
import '../CSS/App.css'
import loadingGif from '../assets/loading.gif'
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

// styling components
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

// page components
import Consent from './Consent'
import Movies from './Movies'
import MoviePreview from './MoviePreview'
import Login from './Login'
import Favorites from './Favorites'
import Signup from './Signup'


class App extends Component {
	constructor() {
		super()
		this.state = {
			movies: [],
			innerWidth: window.innerWidth, 
			error: '',
      isLoading: true,
      isOfAge: false, 
			token: ""
		}
	}

	getStateFromLocalStorage() {
		let token = localStorage.getItem("token")
		let email = localStorage.getItem("email")
		let firstName = localStorage.getItem("name")
		if(token) {
			this.setState({
				token: token,
				email: email,
				name: firstName,
				isOfAge: true
			})
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.token !== this.state.token) {
			this.getStateFromLocalStorage()
		}
	}
	
  componentDidMount(){
		this.getStateFromLocalStorage();
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=44887bea2881cacd3e7aa9c9a1e39222&with_genres=27")
    .then(response => response.json())
    .then(data => {
      this.setState({movies: data.results, isLoading: false,})
    })
		.catch(error => { 
			this.setState({error: error.message})
		})
  }

  userDidConsent = () => {
    return this.setState({ isOfAge: true })
  }

  userLogout = (event) => {
    event.preventDefault()
    localStorage.clear()
    localStorage.setItem("isOfAge", true)
    return this.setState({ token: "", email: "", name: ""})
  }

  render(){
    return(
      <main className="App">
				<Nav userLogout={this.userLogout}/>
				{this.state.error && <h3>{this.state.error}</h3>}
        {this.state.isLoading && <img className="loading-gif" src={loadingGif}/>}
        {localStorage.getItem("isOfAge") !== "true" && <Redirect to="/Consent" />}
        <Switch>
          <Route exact path="/">
            <Header />
            <Movies movies={this.state.movies} />
          </Route>
          <Route exact path="/Consent">
            <Consent consent={this.userDidConsent}/>
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Favorites">
            <Favorites movies={this.state.movies} />
          </Route>
          <Route exact path="/MoviePreview/:movie_id">
            <MoviePreview />
          </Route>
        </Switch>
			<Footer />
      </main>
    )
  }	
}

export default App
