import { createAppSlice } from "../../app/createAppSlice"

type Todo = {
  id: number;
  value: string;
}

const initialState = {
  todosArray: [] as Todo[],
}

export const TodoSlice = createAppSlice({
  name: "Todos",
  initialState,
  reducers: create => ({
    addTodo: create.reducer((state,action: {payload: Todo}) => {
      state.todosArray.push(action.payload)
    }),
    deleteTodo: create.reducer((state, action: { payload: number }) => {
      state.todosArray = state.todosArray.filter(item => item.id !== action.payload)
    }),
    editTodo: create.reducer((state, action: { payload: { id: number; value: string } }) => {
      state.todosArray =  state.todosArray.map(item => {
        if (item.id === action.payload.id) {
          item.value = action.payload.value
        }
        return item
      })
    })
  }),
  selectors: {
    selectTodos: state => state.todosArray
  }
})

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;
export const { selectTodos } = TodoSlice.selectors;