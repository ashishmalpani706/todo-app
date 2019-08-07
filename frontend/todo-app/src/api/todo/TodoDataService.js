import Axios from "axios";

class TodoDataService {
    retreiveAllTodos(name) {
        return Axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retreiveTodo(name, id) {
        return Axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        return Axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        return Axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }
}

export default new TodoDataService()