import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults:[
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3},
      ],
      playlistName: '',
      playlistTracks: [
        {name: 'plname4', artist: 'plartist4', album: 'plalbum4', id: 4},
        {name: 'plname5', artist: 'plartist5', album: 'plalbum5', id: 5},
      ]
    }
  }

  render(){
    return(
      <div>
        <h1>Play my <span className="highlight">Jam</span>!</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist 
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
