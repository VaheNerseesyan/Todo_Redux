import { createAppSlice } from "../../app/createAppSlice"
const initialState = {
  todosArray: [],
}

export const TodoSlice = createAppSlice({
  name: "Todos",
  initialState,
  reducers: create => ({
    addTodo: create.reducer((state,action) => {
      state.todosArray.push(action.payload)
    }),
    deleteTodo: create.reducer((state, action) => {
      state.todosArray = state.todosArray.filter(item => item.id !== action.payload)
    }),
  }),
  selectors: {
    selectTodos: state => state.todosArray
  }
})

export const { addTodo, deleteTodo } = TodoSlice.actions;
export const { selectTodos } = TodoSlice.selectors;