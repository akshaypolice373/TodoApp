import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
import { withRouter } from 'react-router'
// import ShowInvalidCredentials from './ShowInvalidCredentials'
// import ShowLoginSuccessMessage from './ShowLoginSuccessMessage'

export class LoginComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: "Akshay",
             password: '',
             hasLoginFailed: false,
             showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state)
    }

    loginClicked() {
        if(this.state.username==="Akshay" && this.state.password==="Akshay")
        {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
                this.setState({
                    hasLoginFailed: false,
                    showSuccessMessage: true
                })
        }
        else
        {
            console.log("Failed")
            this.setState({
                hasLoginFailed: true,
                showSuccessMessage: false
            })
        }
    
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
               
                <div className="container">
                    {/* <div className="username"> */}
                    UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    {/* </div> */}
                    {/* <div className="password"> */}
                    Password  : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    {/* </div> */}
                    {/* <div className="login_button"> */}
                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                        {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(LoginComponent)
