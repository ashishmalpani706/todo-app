import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        const userLogStatus = AuthenticationService.isUserLoggedIn();
        console.log(userLogStatus);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="https://in28minutes.com">in28Minutes</a></div>
                    <ul className="navbar-nav">
                        {userLogStatus && <li><Link className="nav-link" to="/welcome/sample ">Home</Link></li>}
                        {userLogStatus && <li><Link className="nav-link" to="/todos">ToDos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!userLogStatus && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {userLogStatus && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);