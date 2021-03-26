import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './change_n_child';
import {Sibling} from './change_n_sibling';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={name: 'Ann'};
        this.changeName=this.changeName.bind(this);
    }
    changeName(newName){
        this.setState({name: newName});
    }
    render(){
        return(
            <Child onChange={this.changeName}/>
            <Sibling name={this.state.name}/>
        )
    }
}
ReactDOM.render(
    <Parent/>, 
    document.getElementById('my_app')
);