import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

export default class Search extends Component {
  state = {
    trackTitle: "",
  };
  onChange = (e) => {
    // const [name, value] = e.target;
    this.setState({ [e.target.name]: e.target.value });
  };
  searchTrack = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_LYRIC_BASE_URL}track.search?
      q_artist=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_LYRIC_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACK",
          payload: res.data.message.body.track_list,
        });
        this.setState({ trackTitle: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search For A Song
              </h1>
              <p className="text-center lead">Get the lyrics for any song.</p>
              <form onSubmit={this.searchTrack.bind(this, value.dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block mt-3"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
