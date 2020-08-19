import React, { Component } from 'react'
import Child from './Child'
import FunctionalComponent from './FunctionalComponent'
import StatefulComponent from './StatefulComponent'

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h1>I am a Parent Component</h1>
                <Child Title="Esto es el primer titulo"></Child>
                <FunctionalComponent Title="Esto es el segundo titulo"></FunctionalComponent>
                <StatefulComponent></StatefulComponent>
            </div>
        )
    }
}
