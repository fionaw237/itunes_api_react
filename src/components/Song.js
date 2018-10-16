import React from 'react';

const Song = (props) => {
  return (
    <li className="song">
      <img className="song-image" src={props.song["im:image"][0].label}></img>
      {props.song.title.label}
    </li>
  )
}

export default Song;
