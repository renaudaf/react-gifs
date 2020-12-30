import React, { useState } from "react";
import giphy from "giphy-api";

import SearchBar from "./search_Bar";
import GifList from "./gif_list";
import Gif from "./gif";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [selectedGifId, setSelectedGifId] = useState(null);

  const search = (query) => {
    giphy('uMdmOMR0XAT0aeLWxBgEe5vYPUHNkt0Q').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGifs(res.data);
    });
  };

  const selectG = (id) => {
    setSelectedGifId(id);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar search={search} />
        <div className="selected-gif">
          <Gif id={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} selectG={selectG} />
      </div>
    </div>
  );
};

export default App;
