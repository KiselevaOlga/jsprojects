import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    render(){
        return(
            <div className="SearchBar">
        
                <input placeholder="Enter name of Artist, song or album"></input>
                <button className="SearchButton">Search</button>

            </div>
        )
    }
}