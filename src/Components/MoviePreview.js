import React from 'react'
import '../CSS/MoviePreview.css'
import { Link } from "react-router-dom"
import { withRouter } from "react-router"
import loadingGif from '../assets/loading.gif'



class MoviePreview extends React.Component {
  constructor() {
    super()
    this.state = {
      movie: {},
      isLoading: true
    }
  }

  componentDidMount() {
    const id = this.props.match.params.movie_id;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=44887bea2881cacd3e7aa9c9a1e39222`)
      .then(response => response.json())
      .then(data => {
        this.setState({movie: data, isLoading: false})
      })
  }

  render() {
    const movie = this.state.movie
		const { title, runtime, genres, vote_average, tagline, overview, poster_path, backdrop_path, id } = movie
    return (
      <div>
        {this.state.isLoading ? <img className="loading-gif" src={loadingGif}/> : 
          <section className="preview-container" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}>
            <div className="preview">
              <article className="display-left">
                <img className="movie-image" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}></img>
              </article>
              <article className="display-right">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-runtime">Runtime: {runtime} minutes</p>
                <p className="movie-genres">{genres[0].name}</p>
                <p className="movie-info">Average: {vote_average}</p><br></br>
                <h4 className="movie-tagline">{tagline}</h4><br></br>
								<h2 className="overview-header">Overview:</h2>
                <p className="movie-overview">{overview}</p>
                <Link to="/" type="button">
                  <button className="back-button">Back to Main 💀</button>
                </Link>
              </article>
            </div>
          </section>
        }

      </div>
    )
  }
}

export default withRouter(MoviePreview)