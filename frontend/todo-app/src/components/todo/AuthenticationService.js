import axios from 'axios'

class AuthenticationService {

    executeBasicAuthenticationService(user, password) {
        return axios.get('http://localhost:8080/basicauth',
            {headers: {authorization:this.basicAuthenticationToken(user,password)}})
    }

    basicAuthenticationToken(user, password) {
        return 'Basic ' + window. btoa(user + ':' + password)
    }

    registerSuccessfulLogin(user, password) {
        sessionStorage.setItem('authenticatedUser',user);
        this.setupAxiosInterceptors(this.basicAuthenticationToken(user, password));
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