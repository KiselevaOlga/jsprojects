import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
    render(){
        <div className='SearchBar'>
            <input placeholder="Enter Song, Name or Album"/>
            <button className='SearchButton'>Search</button>
        </div>
    }
}