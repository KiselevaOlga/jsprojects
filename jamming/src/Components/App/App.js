import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, 
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}, 
        {name: 'name4', artist: 'artist4', album: 'album4', id: 4}, 
      ],
      playlistName: 'My play list',
      playlistTracks: [
        {name: 'plname5', artist: 'plartist5', album: 'plalbum5', id: 5},
        {name: 'plname6', artist: 'plartist6', album: 'plalbum6', id: 6}
      ],
    };
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack=>savedTrack['id'] === track['id'] )){
        return;
    }
    tracks.push(track)
    this.setState({
      playlistTracks: tracks
    })

  }

  removeTrack(track){
    // find index first and delete
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(curTrack=> curTrack['id'] !== track['id'])
    
    this.setState({
      playlistTracks: tracks
    })
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmmm</span>ing!</h1>
        <div className='App'>
            <SearchBar/>
            <div className="App-playlist">
              <SearchResults 
                  searchResults={this.state.searchResults} 
                  onAdd={this.addTrack}
              />
              <Playlist 
                  playlistName={this.state.playlistName} 
                  playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
              />
            </div>
        </div>
      </div>
    )
  }
}
export default App;
