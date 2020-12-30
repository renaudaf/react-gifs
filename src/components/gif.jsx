import React from 'react';

const Gif = (props) => {
  const handleClick = () => {
    if (props.selectG) {
      props.selectG(props.id);
    }
  };

  if (!props.id) {
    return null;
  }
  const src = `https://media.giphy.com/media/${props.id}/giphy.gif`;
  return (
    <img src={src} alt="" className="gif" onClick={handleClick} />
  );
};

export default Gif;
