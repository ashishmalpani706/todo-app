import Axios from "axios";

class TodoDataService {
    retreiveAllTodos(name) {
        return Axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodo(name, id) {
        return Axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
}

export default new TodoDataService()