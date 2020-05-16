import React, { Component } from "react";
import Axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
  };

  componentDidMount() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_LYRIC_BASE_URL}chart.tracks.get?
      chart_name=top&page=1&page_size=10&country=zh&f_has_lyrics=1&apikey=${process.env.REACT_APP_LYRIC_KEY}`
    )
      .then((res) => {
        console.log(res.data.message.body.track_list);
        this.setState({
          track_list: res.data.message.body.track_list,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
