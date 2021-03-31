import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';

export class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={"New playlist"}></input>
                <TrackList tracks={this.props.playlistTracks}/>
                <button className="Playlist-save">Save to Spotify</button>

            </div>
        )
    }
}