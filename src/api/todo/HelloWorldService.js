import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        // console.log("executed")
        return axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService() {
        // console.log("executed")
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
        // console.log("executed")
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()