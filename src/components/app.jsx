import React, { Component } from "react";
import giphy from "giphy-api";

import SearchBar from "./search_Bar";
import GifList from "./gif_list";
import Gif from "./gif";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy('uMdmOMR0XAT0aeLWxBgEe5vYPUHNkt0Q').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectG = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectG={this.selectG} />
        </div>
      </div>
    );
  }
}

export default App;
