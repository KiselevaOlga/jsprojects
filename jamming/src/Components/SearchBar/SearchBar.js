import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term: ''}
        this.search=this.search.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
    }

    search(){
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e){
// Sets the state of the search bar’s term to the event target’s value.
        this.setState({term: e.target.value});
    }

    render(){
        return(
        <div className='SearchBar'>
            <input 
                placeholder="Enter Song, Name or Album"
                onChange={this.handleTermChange}

            />
            <button className='SearchButton' onClick={this.search}>Search</button>
        </div>
        )
        
    }
}