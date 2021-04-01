import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={term: ''}
        this.handleTermChange=this.handleTermChange.bind(this);
        this.search=this.search.bind(this);
    }

    search(){
        this.props.onSearch(this.state.term)
    }
    handleTermChange(e){
        this.setState({term: e.target.value});
    }

    render(){
        return(
            <div className="SearchBar">
        
                <input placeholder="Enter name of Artist, song or album" onChange={this.handleTermChange}></input>
                <button className="SearchButton" onClick={this.search}>Search</button>

            </div>
        )
    }
}