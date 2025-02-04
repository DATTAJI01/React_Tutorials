import { createContext, useContext } from 'react'


export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'Todo Msg',
      completed: false,
    },
  ],
  addTodo: (todo) => {
    console.log(todo);
  },
  updateTodo: (id, todo) => {
    console.log(`Updating todo with id ${id}:`, todo);
  },
  deleteTodo: (id) => {
    console.log(`Deleting todo with id ${id}`);
  },
  toggleComplete: (id) => {
    console.log(`Toggling completion for todo with id ${id}`);
  }
});




export const useTodo = () => {
    return useContext(TodoContext);
}; 


export const TodoProvider = TodoContext.Provider;
