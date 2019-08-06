import React, {Component} from 'react'
import '../../api/todo/TodoDataService.js'
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            todos : []
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    }

    componentDidMount() {
        let user = AuthenticationService.getLoggedInUser();
        TodoDataService.retreiveAllTodos(user)
        .then (
            response => this.setState({todos : response.data})
        )
    }

    deleteTodoClicked(id) {
        let user = AuthenticationService.getLoggedInUser();
        console.log(user + " " + id);
    }

    render() {
        return (
            <>
            <h1>List ToDos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                this.state.todos.map (
                                    todos => 
                                        <tr key={todos.id}>
                                            <td>{todos.description}</td>
                                            <td>{todos.done.toString()}</td>
                                            <td>{todos.targetDate.toString()}</td>
                                            <td><button className="btn btn-warning" onClick={this.deleteTodoClicked(todos.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ListTodosComponent