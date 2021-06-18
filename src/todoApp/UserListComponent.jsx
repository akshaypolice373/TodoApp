import React, { Component } from 'react'
import './UserListComponent.css'

class UserListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname: '',
             lastname: '',
             email: ''
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.AddClicked = this.AddClicked.bind(this)
    }

    HandleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    AddClicked = () => {

    }
    
    render() {
        return(
            <form>
                <div className="form-group col-3">
                    <label><h1>Add User's</h1></label>
                    <input
                        name="firstname" 
                        className="form-control"
                        placeholder="First Name"
                        onChange={this.HandleChange}
                        value={this.state.firstname}/>
                    <label></label>
                    <input 
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        onChange={this.HandleChange}
                        value={this.state.lastname}/>
                    <label></label>
                    <input 
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={this.HandleChange}
                        value={this.state.email}/>  
                    <button onClick={this.AddClicked} type="button" className="btn btn-primary submit">Add</button>                
                </div>
            </form>
        )
    }
}

export default UserListComponent