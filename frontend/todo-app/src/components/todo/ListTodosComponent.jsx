import React, {Component} from 'react'

class ListTodosComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            todos : [
                {id : 1, description : 'Learn React', done:false, targetDate: new Date()},
                {id : 2, description : 'Learn Redux', done:false, targetDate: new Date()},
                {id : 3, description : 'Learn Spring Boot', done:false, targetDate: new Date()}
            ]
        }
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