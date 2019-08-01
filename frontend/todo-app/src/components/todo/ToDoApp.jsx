import React, {Component} from 'react'

class ToDoApp extends Component {
    render() {
        return (
            <div>
                To Do Application
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            username : '',
            password : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    
    render() {
        return (
            <div>
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Submit</button>
            </div>
        )
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({[event.target.name] : event.target.value});
    }

    loginClicked(event) {
        if(this.state.username === 'sample' && this.state.password === 'password') {
            console.log('Approved');
        }
        else {
            console.log('Failed');
        }
    }
}

export default ToDoApp;