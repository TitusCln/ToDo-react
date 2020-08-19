import React, { Component } from 'react'

export default class AddToDo extends Component {
    state = {
        id: "",
        title: "",
        status: "Doing"
    };

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleStatusChange = (event) => {
        this.setState({
            status: event.target.status
        })
    }

    submitToDo = (event) => {
        event.preventDefault();
        this.props.onAdd({
            id: this.state.id,
            title: this.state.title,
            status: this.state.status
        });
        this.setState({
            id: "",
            title: "",
            status: "Doing"
        });
    }
    render() {
        return (
            <div>

                <div id="collapseForm" class="card collapse">
                    <div class="card-header">
                        Add new ToDo item
                    </div>
                    <div  class="card-body">
                        <p class="card-text">
                            <form onSubmit={this.submitToDo}>
                                <div className="form-group" >
                                    <input value={this.state.id} className="form-control" placeholder="Enter Id" onChange={this.handleIdChange} />
                                </div>
                                <div className="form-group" >
                                    <input value={this.state.title} className="form-control" placeholder="Enter Title" onChange={this.handleTitleChange} />
                                </div>
                                <div className="form-group">
                                    <select value={this.state.status} className="form-control" onChange={this.handleStatusChange}>
                                        <option value="Done" >Done</option>
                                        <option value="Doing" >Doing</option>
                                    </select>
                                </div>
                                <button type="submit" className="form-control btn btn-primary" >Add Todo</button>
                            </form></p>
                    </div>
                </div>

            </div>
        )
    }
}
