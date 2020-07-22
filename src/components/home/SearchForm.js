import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron bg-danger jumbotron-fluid mt-25 text-center">
        <div className="container">
		<h1 className="display-4 mb-3">
            <i className="fa fa-search" /> <a target="_blank" className="btn btn-success" href="https://findbashar.com/">Click Here to See Bashar's Portfolio</a>
          </h1>
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> <button className="btn btn-info">Enter a name of a movie or a tv series</button>
          </h1>
		  
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="eg. Avatar, Titanic, Mission Impossible etc."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-success btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
