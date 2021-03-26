import React from 'react';

export class Child extends React.Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        const name=e.target.value;
        this.props.onChange(name);
    }
    render(){
        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value='Jason'>Jason</option>
                    <option value='Ann'>Ann</option>
                    <option value='Chen'>Chen</option>
                </select>
            </div>
        )
    }
}