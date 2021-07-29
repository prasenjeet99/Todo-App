import React,{ useState, useEffect } from "react";
import './App.css';

//importing components
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText,setInputText] = useState(" ");
  const [todos,setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  // Run Once
  useEffect(()=>{
    getLocalTodo();
  }, []);
  //useEffects
  useEffect(() => {
    filterHandler();
    saveLocalTodo();
  },[todos, status]);
  // Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilterTodo(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodo(todos);
        break;    
    }  
  };
  // Save local 
  const saveLocalTodo = () => {
      
        localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodo = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let localTodo=JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo); 
    }
  };
  return (
    <div className="App">
      <header>
        <h1> Prasenjeet's Todo List</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} filterTodo={filterTodo} />
    </div>
  );
}

export default App;
