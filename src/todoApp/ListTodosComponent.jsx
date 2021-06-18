import React, { Component } from 'react'
import TodoDataService from '../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: [],
             message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodo = this.refreshTodo.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)

    }

    componentDidMount() {
        this.refreshTodo()
    }

    refreshTodo() {
        let username = AuthenticationService.getUserLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getUserLoggedInUserName()
        // console.log(username, id)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({
                        message: `Delete of todo ${id} Successful`
                    })
                    this.refreshTodo()
                }
            )
    }

    addTodoClicked() {
        this.props.history.push('/todos/-1')
    }

    updateTodoClicked(id) {
        console.log("updated " + id)
        this.props.history.push(`/todos/${id}`)
    }

    render() {
        

        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.todos.map(
                            todo => 
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td>{todo.isDone}</td>
                                <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                </div>
                </div>
                {this.state.message &&<div className="alert alert-success">{this.state.message}</div>
}            </div>
        )
    }
}

export default ListTodosComponent
