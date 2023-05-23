import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoList(state, action) {
      state.push(action.payload);
    },
    deleteTodoList(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodoList() {
      return  [];
    },
    editTodoList(state, action) {
      state.map((e) => {
        if (e.id === action.payload.id) {
          e.title = action.payload.value;
        }
        return e;
      });
    },
  },
});

export const { addTodoList, deleteTodoList, deleteAllTodoList, editTodoList } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
// export const reducerTodo = (state = defaultState, action) => {
//   switch (action.type) {
//     case actionTypeReducerTodo.ADD_TODO:
//       return [...state, action.payload];
//     case actionTypeReducerTodo.DELETE_TODO:
//       return state.filter((todo) => todo.id !== action.payload);
//     case actionTypeReducerTodo.DELETE_ALL_TODO:
//       return [];
//     case actionTypeReducerTodo.EDIT_TODO:
//       const editTodo = [...state].map((e) => {
//         if (e.id === action.payload.id) {
//           e.title = action.payload.value;
//         }
//         return e;
//       });
//       return editTodo;
//     default:
//       return state;
//   }
// };
