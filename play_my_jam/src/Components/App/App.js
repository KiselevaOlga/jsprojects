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
      playlistName: 'my list',
      playlistTracks: [
        {name: 'plname4', artist: 'plartist4', album: 'plalbum4', id: 4},
        {name: 'plname5', artist: 'plartist5', album: 'plalbum5', id: 5},
      ]
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

  savePlaylist(){
    let trackURIs= this.state.playlistTracks.map(track=>track.uri)
  }

  search(searchTerm){
    console.log(searchTerm)
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
