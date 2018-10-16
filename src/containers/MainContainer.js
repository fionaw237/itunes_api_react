import React, {Component} from 'react';
import SongsList from './SongsList';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then((res) => res.json())
    .then((songs) => {
      this.setState({songs: songs.feed.entry})
    })
  }

  render(){
    return (
      <div className="main-container">
        <h1 className="main-heading">iTunes UK Top 20</h1>
        <SongsList songs = {this.state.songs}/>
      </div>
    );
  }

}

export default MainContainer;
