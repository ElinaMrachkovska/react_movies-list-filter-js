import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';



export const App = () => {
  const [query, setQuery] = useState('');
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }
  const normQuery = query.trim.toLowerCase();

  const filteredMovie = moviesFromServer.filter(movie => {
if (normQuery) {
  return true;
}

const title = movie.title.toLowerCase();
const description = movie.description.toLowerCase();
return title.includes(normQuery) || description.includes(normQuery);
  })
 return (
  <div className="page">
    <div className="page-content">
      <div className="box">
        <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              value = {query}
              onChange={handleQueryChange}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
)};
