import axios from 'axios'

class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        let basicAuthHeader = 'Basic ' + window. btoa(username + ':' + password)
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(basicAuthHeader);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let userLogStatus = sessionStorage.getItem('authenticatedUser');
        if (userLogStatus === null) return false;
        return true;
    } 

    getLoggedInUser() {
        let userLogStatus = sessionStorage.getItem('authenticatedUser');
        if (userLogStatus === null) return '';
        return userLogStatus; //<--username
    }

    setupAxiosInterceptors(basicAuthHeader) {
        
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader;
                }
                return config
            }
        )
    }

}
export default new AuthenticationService()