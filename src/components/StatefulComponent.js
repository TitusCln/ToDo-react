import React, { Component } from 'react'

export default class StatefulComponent extends Component {
    state = {
        label: "Hello"
    }

    handleClick = () =>{
        console.log("Pressed button log");
        this.setState({label:"You pressed the button"})
    }

    render() {
        return (
            <div>
                <h2>{this.state.label}</h2>
                <button type="button" onClick={this.handleClick}>Click me!!</button>
            </div>
        )
    }
}
