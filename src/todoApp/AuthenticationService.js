class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessLoggedIn');
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null)
            return false
        return true
        
    }

    getUserLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null)
            return ''
        return user
    }
}

export default new AuthenticationService()