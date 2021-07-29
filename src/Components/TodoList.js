import React from 'react';

//importing components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filterTodo}) => {
    return(
        <div className="todo-container">
      <ul className="todo-list">
          {filterTodo.map((todo) =>(
              <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}   />
          ))

          }
      </ul>
    </div>
    );
}

export default TodoList;