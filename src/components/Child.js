import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <h3>I am Child Component</h3>
                <h4>{this.props.Title}</h4>
            </div>
        )
    }
}
