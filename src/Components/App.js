import React, { Component } from 'react'
import '../CSS/App.css'
import loadingGif from '../assets/loading.gif'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { encode } from 'base-64'


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
//session storage is unique to the tab- it is cleared when you close the tab.  Session data isnt shared between tabs.
	getStateFromSessionStorage() {
		let token = sessionStorage.getItem("token")
		let email = sessionStorage.getItem("email")
		let firstName = sessionStorage.getItem("name")
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
			this.getStateFromSessionStorage()
		}
	}
	
  componentDidMount(){
		this.getStateFromSessionStorage();
		fetch("https://foxc-movies-api.herokuapp.com/api/v1/movies")
		.then(response => response.json())
		.then(data => {
			this.setState({movies: data.results, isLoading: false,})
		})
		.catch(error => { 
			this.setState({error: error.message})
		})
  }

  userDidConsent = () => {
    sessionStorage.setItem("isOfAge", !this.state.isOfAge)
    return this.setState({ isOfAge: !this.state.isOfAge })
  }

  userLogout = (event) => {
    event.preventDefault()
    sessionStorage.clear()
    sessionStorage.setItem("isOfAge", true)
    return this.setState({ token: "", email: "", name: ""})
  }

  userLogin = (event) => {
    event.preventDefault()
    let email = event.target.parentElement.querySelector("#email").value
    let password = event.target.parentElement.querySelector("#password").value
    let token = `${email}:${password}` // sends info to backend to be verified
    let basicToken = encode(token) // base 64 encrypted string for security
    fetch('https://foxc-movies-api.herokuapp.com/api/v1/api-keys', {
      method: "POST",
      headers: { //will get this from BE dev.  Headers are additonal rules for the browswer and/or server
        "Content-Type": "application/json",
        "Authorization": `basic ${basicToken}` //API Key
      }
    })
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem("token", data.token)
      sessionStorage.setItem("email", data.email)
      sessionStorage.setItem("name", data.name)
      this.setState({token: data.token, email: data.email, name: data.first_name})
    }).catch(err => alert("Something went wrong"))
  }

  render(){
    return(
      <main className="App">
				{sessionStorage.isOfAge === "true" && <Nav userLogout={this.userLogout}/>}
				{this.state.error && <h3>{this.state.error}</h3>}
        {this.state.isLoading && <img className="loading-gif" src={loadingGif}/>}
        {sessionStorage.getItem("isOfAge") !== "true" && <Redirect to="/Consent" />}
        <Switch>
          <Route exact path="/">
            <Header />
            <Movies movies={this.state.movies} />
          </Route>
          <Route exact path="/Consent">
            <Consent consent={this.userDidConsent}/>
          </Route>
          <Route exact path="/Login">
            {!!this.state.token ? <Redirect to="/" /> :
              <Login userLogin={this.userLogin}/>
            }
          </Route>
          <Route exact path="/Signup">
            <Signup consent={this.userDidConsent}/>
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
