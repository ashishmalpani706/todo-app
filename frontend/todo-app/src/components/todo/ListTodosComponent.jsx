import React, {Component} from 'react'
import '../../api/todo/TodoDataService.js'
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            todos : [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
    }

    addTodoClicked() {
        this.props.history.push(`todos/-1`);
    }

    componentDidMount() {
        this.refreshTodos();
    }
    
    updateTodoClicked(id) {
        this.props.history.push(`todos/${id}`);
    }
    
    refreshTodos() {
        let user = AuthenticationService.getLoggedInUser();
        TodoDataService.retreiveAllTodos(user)
        .then (
            response => this.setState({todos : response.data})
        )
    }

    deleteTodoClicked(id) {
        let user = AuthenticationService.getLoggedInUser();
        TodoDataService.deleteTodo(user, id)
        .then (
            response => {
            this.setState({message : `Deleted Todo with ID ${id}`})
            this.refreshTodos()
            }
        )
    }

    render() {
        return (
            <>
            <h1>List ToDos</h1>
                { this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                                <th>Update</th>
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
                                            <td>{moment(todos.targetDate).format("MM-DD-YYYY")}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todos.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todos.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodosComponent