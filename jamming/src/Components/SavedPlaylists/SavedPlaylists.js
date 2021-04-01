import React from 'react';
import './SavedPlaylists.css';

export class SavedPlaylists extends React.Component {
    render(){
        return (
            <div className='savedPlaylists'>
                <button onClick={this.props.onShow}>Show lists</button>
            </div>
        )
    }
}