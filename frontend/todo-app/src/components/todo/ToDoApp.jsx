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
            password : '',
            hasLoginFailed : false,
            showSuccess: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    
    render() {
        return (
            <div>
                <ShowSuccess showSuccess={this.state.showSuccess}/>
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
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
            this.setState({showSuccess : true});
            this.setState({hasLoginFailed : false});
        }
        else {
            console.log('Failed');
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

export default ToDoApp;