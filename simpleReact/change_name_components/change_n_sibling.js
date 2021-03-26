import React from 'react';

export class Sibling extends React.Component{
    render(){
        const name = this.props.name;
        return (
            <h1>My name is {name}</h1>
        )
    }
}