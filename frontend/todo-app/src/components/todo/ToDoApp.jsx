import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import HeaderComponent from './HeaderComponent'
import AuthenticatedRoute from './AuthenticatedRoute'

class ToDoApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </>
            </Router>
        )
    }
}

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

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. Visit your <Link to="/todos">ToDos</Link>
            </div>
            </>
        )
    }
}

class ErrorComponent extends Component {
    render() {
        return (
            <div>Invalid URL</div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            username : '',
            password : '',
            hasLoginFailed : false,
            showSuccess: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    
    render() {
        return (
            <div className="container">
                {this.state.showSuccess && <div>Successful Login</div>}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Login Attemp Failed</div>}
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn" onClick={this.loginClicked}>Submit</button>
            </div>
        )
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    loginClicked(event) {
        if(this.state.username === 'a' && this.state.password === 's') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({showSuccess : true});
            this.setState({hasLoginFailed : false});
        }
        else {
            this.setState({hasLoginFailed : true});
            this.setState({showSuccess : false});
        }
    }
}

function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed) {
        return <div>Invalid Credentails</div>
    }
    return null;
}

function ShowSuccess(props) {
    if(props.showSuccess) {
        return <div>Successful Login</div>
    }
    return null;
}


class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All rights reserved 2019 @AM</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>You are logged out</h1>
                </div>
                <div className="container">
                    Thank you for using our todos app.
                </div>
            </>
        )
    }
}

export default ToDoApp;