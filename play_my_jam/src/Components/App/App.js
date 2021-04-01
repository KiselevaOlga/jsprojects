import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults:[],
      playlistName: 'my list',
      playlistTracks: []
    };
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.changePlaylistName=this.changePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.search=this.search.bind(this);
  }
  
  addTrack(track){
    let updatedTrackList = this.state.playlistTracks;
    if(updatedTrackList.find(savedTrack=>savedTrack["id"]=== track["id"])){
      return
    }
    updatedTrackList.push(track);
    this.setState({
      playlistTracks: updatedTrackList
    })
  }

  removeTrack(track){
    let updatedListTracks = this.state.playlistTracks;
    updatedListTracks = updatedListTracks.filter(curTrack=> curTrack['id'] !== track['id'])
    
    this.setState({
      playlistTracks: updatedListTracks
    })
  }

  changePlaylistName(name){
    this.setState({
      playlistName: name
    })
  }

  search(searchTerm){
    Spotify.search(searchTerm)
    .then(newTracks=>
      this.setState({searchResults: newTracks})
    );
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

  render(){
    return(
      <div>
        <h1>Play my <span className="highlight">Jam</span>!</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults 
                searchResults={this.state.searchResults} 
                onAdd={this.addTrack}/>
            <Playlist 
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.changePlaylistName}
                  onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
