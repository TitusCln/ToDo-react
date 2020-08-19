import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddToDo from './AddToDo'
import axios from 'axios'


export default class TodoList extends Component {
    state = {
        todos: [
            { id: '1', title: 'Work on my React skills', status: 'Doing' },
            { id: '2', title: 'Create your first react app', status: 'Done' }
        ]
    }
    componentDidMount(){
        axios.get('api/projects')
        .then((response)=> console.log(response.data));
    }

    deleteToDo=(toDo)=>{
        const filteredToDos=this.state.todos.filter(todoItem=> toDo.id!==todoItem.id);
        this.setState({todos:filteredToDos});
    }

    editToDo=(toDo)=>{
        this.setState(state=>({
                todos:state.todos.map(todo=>{
                    if(todo.id===toDo.id){
                        return {
                            ...todo,
                            status:todo.status==="Doing"?"Done":"Doing"
                        };
                    }else{
                        return todo;
                    }
                })
            }));
    };

    addToDo=(toDo)=>{
        this.setState({
            todos:[...this.state.todos,toDo]
        });
    };

    render() {
        return (
            <div className="container">
                
                <h1>ToDo List
                    <a class="btn btn-primary" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseForm">Add
                    </a>
                </h1>
                <AddToDo onAdd={this.addToDo}></AddToDo>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td >{item.status}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>this.deleteToDo(item)}>
                                            <span>
                                                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                        <button className="btn btn-primary" onClick={()=>this.editToDo(item)}>
                                            <span>
                                                <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
