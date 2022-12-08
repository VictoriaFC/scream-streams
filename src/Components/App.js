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
			innerWidth: window.innerWidth, //?
			error: '',
      isLoading: true,
      isOfAge: false, 
			token: ""
		}
	}

	getStateFromSessionStorage() { //stores session for the tab you are on / browser hard drive. 
		//Used over local storage bc storage didn't expire. So if you closed the tab and open another it wouldn't reset the token to false.
		let token = sessionStorage.getItem("token") // part of session storage
		let email = sessionStorage.getItem("email")
		let firstName = sessionStorage.getItem("name")
		if(token) { //token is how they are hitting the API
			this.setState({
				token: token,
				email: email,
				name: firstName,
				isOfAge: true
			})
		}
	}

	componentDidUpdate(prevProps, prevState) { // Updates state if token does not match - only does it once
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

  userDidConsent = () => { // why isn't this under login page?
    sessionStorage.setItem("isOfAge", !this.state.isOfAge) //?
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
    let token = `${email}:${password}`
    let basicToken = encode(token)
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/api-keys`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `basic ${basicToken}`
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
