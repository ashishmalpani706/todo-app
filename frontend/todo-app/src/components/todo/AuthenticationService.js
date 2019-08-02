class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let userLogStatus = sessionStorage.getItem('authenticatedUser');
        if (userLogStatus === null) return false;
        return true;
    }
}
export default new AuthenticationService()