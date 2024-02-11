import { useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";
import Message from "./components/Message";
import { TodoListContext } from "./store/todo-items-store";



const reducerFunction=(currentValue,action)=>{
  let newTodo=currentValue;
  if(action.type==="ADD_TODO"){
    newTodo=[...currentValue,{name:action.payload.name,date:action.payload.date}]
  }
  else if(action.type==="DELETE_TODO"){
    newTodo=currentValue.filter((item)=>item.name!==action.payload.name)
  }
  return newTodo;
}




function App() {
  const newTodoList = [
    {
      name: "100 PushUps",
      date: "2024-01-01",
    },
    { name: "100 Squats", date: "2024-02-01" },
    { name: "10 Km Run", date: "2024-03-01" },
  ];

  

const [todoList,dispatchTodoList]=useReducer(reducerFunction,newTodoList);


const getTodoNameAndDate=(name,date)=>{

    
  dispatchTodoList({
    type:"ADD_TODO",
    payload:{
      name,
      date,
    }
  })


}

const deleteTodoItem=(name)=>{


  console.log(name)

  dispatchTodoList({
    type:"DELETE_TODO",
    payload:{
      name
    }
  })
}


  return (
    <center>
      <TodoListContext.Provider value={{todoList,getTodoNameAndDate,deleteTodoItem}}>
      <Header />
      <AddTodo />
      <Message/>
      <TodoLists/>
      </TodoListContext.Provider>
    </center>
  );
}



export default App;
