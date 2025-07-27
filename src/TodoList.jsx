import { useState} from  "react";

export default function TodoList() {
let[todos, setTodos] = useState(["Sample task"]);
let[ newTodo, setNewTodo] = useState("");

let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
}
let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);
}

    return(
        <div> 
            <input placeholder="add a task" value = {newTodo} onChange = {updateTodoValue}></input>
            <br></br>
            <button onClick= {addNewTask}>add task</button>
             <br></br>
              <br></br>
               <br></br>
                <br></br>

                <hr></hr>
                <h4>tasks todo</h4>
                <ul>{todos.map((todo) => (
                    <li>{todo}</li>))}</ul>
        </div>
    )
}