import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import {SavedPlaylists} from '../SavedPlaylists/SavedPlaylists';
import Spotify from '../../util/Spotify.js';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults: [],
      playlistName: '',
      playlistTracks: [],
    };
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.search=this.search.bind(this);
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
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(curTrack=> curTrack['id'] !== track['id'])
    
    this.setState({
      playlistTracks: tracks
    })
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }
  
  savePlaylist(){   
    let trackURIs = this.state.playlistTracks.map(track=>track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    .then(()=>{
      this.setState({playlistName: 'New playlist',
                    playlistTracks: []
                  })
    });
  }
  
  showLists(){
    Spotify.showLists();
  }
  search(term){
    Spotify.search(term).then(newTracks => {
      this.setState({searchResults: newTracks})
    })
  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmmm</span>ing!</h1>
        <div className='App'>
        
            <SearchBar onSearch={this.search}/>
            <SavedPlaylists onShow={this.showLists}/>
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
                  onSave={this.savePlaylist}
              />
            </div>
        </div>
      </div>
    )
  }
}
export default App;
