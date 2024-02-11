import { useContext } from "react";
import { FcFullTrash } from "react-icons/fc";
import { TodoListContext } from "../store/todo-items-store";
const TodoItem=({name,date})=>{

  const {deleteTodoItem}=useContext(TodoListContext);

  const removeItemByName=(todoName)=>{

    deleteTodoItem(todoName)

  }

  return(
    <>
  <div className="container">
  <div className="add-todo-container">
  <p>{name}</p>
  <p>{date}</p>
  <button className="delete-btn" onClick={()=>removeItemByName(name)}><FcFullTrash />Delete</button>
  </div>
  </div>
    </>
  )

}

export default TodoItem;