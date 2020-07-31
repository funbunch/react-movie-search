import React, {useState} from 'react';
// import { filter } from 'ramda';

function SearchMovies() {

  //states- input query, movies
  const [query, setQuery] = useState(''); 
  const [movies, setMovies] = useState([]);
  
  const searchMovies = async (e) => {
    e.preventDefault();


    const url = `https://api.themoviedb.org/3/search/movie?api_key=e1d4cd7a72e42e432324ccb18474dc56&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Data:", data)
      const movies = data.results.filter((movie) => {
        return movie.poster_path
      })
      setMovies(movies)
    } catch(err) {
        console.error(err);
      }
    
  }
  console.log("Movies", movies);
  return (
    <>
      <nav class="navbar navbar-light bg-light">
      <label className="label mb-sm-2" htmlFor="query">Movie Name</label>
      <form className="form-inline" onSubmit={searchMovies}>
        <input className="form-control mr-sm-2 mb-sm-2" type="text" name="query" placeholder="Top Gun" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Search</button>
      </form>
      <div className="card-list row">
        {movies.map((movie, i) => ( 
          <div key={`movie-card-${i}`} className="col-12 col-sm-6 col-md-4 col-lg-3 ">
            <div class="card mb-4 p-2">
              <img className="card--image img-fluid mb-2"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title + ' poster'}
                />
                <h5>Title: {movie.title}</h5>

            </div>
          </div>
      
     
        ))}
      </div>
      </nav>
    </>
  )
}

export default SearchMovies;