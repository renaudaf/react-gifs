import React from 'react';
import Gif from "./gif";

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectG={props.selectG} />)}
    </div>
  );
};

export default GifList;
