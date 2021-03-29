import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term: ''}
        this.search=this.search.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    search(){
        this.props.onSearch(this.state.term);
    }

    handleClick(e){
        this.props.onClick(e.target.value)
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
            <button className='SearchButton' onClick={this.handleClick}>Search</button>
        </div>
        )
        
    }
}