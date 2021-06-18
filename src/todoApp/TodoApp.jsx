import React, { Component } from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import AuthenticatedRoute from './AuthenticateRoute.jsx'
import UserListComponent from './UserListComponent'
import TodoComponent from './TodoComponent'

class TodoApp extends Component {
    render() {
        return(
            <div>
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/> 
                            <AuthenticatedRoute path="/userlist" component={UserListComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>  
                        </Switch>          
                        <FooterComponent />              
                    </>
                </Router>
                {/* <WelcomeComponent />
                <LoginComponent /> */}
            </div>
        )
    }
}

export default TodoApp