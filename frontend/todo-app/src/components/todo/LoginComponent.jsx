import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


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

export default LoginComponent