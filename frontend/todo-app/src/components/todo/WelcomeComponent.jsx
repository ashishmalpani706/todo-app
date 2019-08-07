import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.getText = this.getText.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        this.state = {
            welcomeMessage : ''
        }
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. Visit your <Link to="/todos">ToDos</Link>
                </div>
                <div> {this.state.welcomeMessage} </div>
            </>
        )
    }
    getText() {
        HelloWorldService.executeHelloWorldBeanService(this.props.match.params.name)
        .then(response => this.handleSuccessResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessResponse(response) {
        this.setState({welcomeMessage : response.data.message})
    }

    handleError(error) {
        console.log(error.response);
    }
}

export default WelcomeComponent