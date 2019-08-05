import React, {Component} from 'react'

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

export default LogoutComponent