import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../api/todo/HelloWorldService';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: ''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfullResponse = this.handleSuccessfullResponse.bind(this);
    }
    

    retrieveWelcomeMessage = (e) => {
        // e.preventDefault()
        // axios.get("http://localhost:8080/hello-world")
        // .then(res => {
        //     console.log(res)
        // })
        // // console.log("clicked")

        // HelloWorldService.executeHelloWorldService()
        // .then(res => this.handleSuccessfullResponse(res))
        // // .catch()
        // }

        //     HelloWorldService.executeHelloWorldBeanService()
        //     .then(res => this.handleSuccessfullResponse(res))
        //     // .catch()
        // }

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(res => {
            this.handleSuccessfullResponse(res)   
        })
        .catch( error => console.log(error) )
        }

        handleSuccessfullResponse(response) {
            this.setState({ welcomeMessage: response.data.message})
        }


    render() {
        return(
            <>
                <h1>|!Welcome!|</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">Here</Link>
                </div>
                <div className="container">
                   Click here to get the msg from rest Api
                   <button 
                    onClick={this.retrieveWelcomeMessage}
                    className="btn btn-primary">Get Welcome Message</button>
                </div> 
                <div className="container">
                    <h2>{this.state.welcomeMessage}</h2>
                </div>   
            </>
            
        )
    }
}

export default WelcomeComponent