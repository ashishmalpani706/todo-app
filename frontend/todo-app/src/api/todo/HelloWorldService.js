import Axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService(name) {
        return Axios.get(`http://localhost:8080/hello-world/path/${name}`);
    }
}

export default new HelloWorldService()