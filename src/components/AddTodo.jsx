import { useContext, useRef } from "react";
import { SlPlus } from "react-icons/sl";
import { TodoListContext } from "../store/todo-items-store";

const AddTodo=()=>{

  const {getTodoNameAndDate}=useContext(TodoListContext);

  

  const todoName=useRef();
  const todoDate=useRef();


  const addTodoInfo=(event)=>{

    event.preventDefault();
    const name=todoName.current.value;
    const date=todoDate.current.value;
    getTodoNameAndDate(name,date)

    todoName.current.value="";
    todoDate.current.value="";

  }

  return (
    <form className="container" onSubmit={addTodoInfo}>
    <div className="add-todo-container">
    <div><input type="text" ref={todoName}/></div>
    <div><input type="date" ref={todoDate}/></div>
    <div><button><SlPlus />Add</button></div>
    </div>
    </form>
  )

}
export default AddTodo;