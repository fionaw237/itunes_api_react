import React from 'react';
import Song from "../components/Song"

const SongsList = (props) => {

  const songsArray = props.songs.map((song, index) => {
    return <Song song={song} key={index}/>
  })

  return (
    <ol className="songs-list">
      {songsArray}
    </ol>
  )
}

export default SongsList;
