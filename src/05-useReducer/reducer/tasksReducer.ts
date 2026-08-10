interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction = 
| { type: 'ADD_TODO', payload: string } // recibo el string con que creo la tarea
| { type: 'TOGGLE_TODO', payload: number } // recibo el id con que edito completo la tarea
| { type: 'DELETE_TODO', payload: number }; // recibo el id que eliminare

export const getTasksInitialState = (): TaskState => {

  const localStorageState = localStorage.getItem('tasks-state');

  if(!localStorageState){
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0
    }
  }

  return JSON.parse(localStorageState);
  
}

export const taskReducer = (state:TaskState, action: TaskAction):TaskState => {

  switch(action.type){
    case 'ADD_TODO':{

      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false
      }

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1
      };
    }

    case 'DELETE_TODO':{
      const currentTodos = state.todos.filter((todo) => todo.id != action.payload);

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter(todo => todo.completed).length,
        pending: currentTodos.filter(todo => !todo.completed).length
      };
    }
    
    case 'TOGGLE_TODO':{
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter(todo => todo.completed).length,
        pending: updatedTodos.filter(todo => !todo.completed).length
      };
    }
    
    default:
    return state;
  }
}