import React from 'react';
import Gif from "./gif";

const GifList = ({ gifs, selectG }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectG={selectG} />)}
    </div>
  );
};

export default GifList;
