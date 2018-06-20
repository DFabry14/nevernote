import axios from "axios";


export default {
    // get todos from /api/todos route
    getTodos: function() {
        return axios.get("/api/todos");
    },
    //Create a todo with a POST request to api/todo
    createNewTodo: function(newTodo) {
        return axios.post("/api/todo", newTodo):
    };
};