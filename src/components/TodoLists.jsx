import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoListContext } from "../store/todo-items-store";

const TodoLists=()=>{

const {todoList}=useContext(TodoListContext);


return <>
{todoList.map((item)=><TodoItem key={item.name} name={item.name} date={item.date} ></TodoItem>)}
</>


}

export default TodoLists;