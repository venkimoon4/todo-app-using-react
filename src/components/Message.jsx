import { useContext } from "react";
import { TodoListContext } from "../store/todo-items-store";

const Message=()=>{

  const {todoList}=useContext(TodoListContext);

  return (
    <>
    {todoList.length===0 && <h1>You Have Completed Your Tasks Go Enjoy Yourself</h1>}
    </>
  )

}

export default Message;