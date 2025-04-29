import { useAppDispatch, useAppSelector } from "../../app/hooks"
import style from './Todo.module.css'
import { useRef } from "react"
import { selectTodos, addTodo } from "./TodoSlice"
import TodoItem from "../../components/todoItem"

function  Todo() {
  const inputValueRef = useRef<HTMLInputElement | null>(null);
  const todo = useAppSelector(selectTodos)
  const dispatch = useAppDispatch();

  const handleAdder = () => {
    if (inputValueRef.current && inputValueRef.current.value) {
      dispatch(addTodo({
        value: inputValueRef.current.value,
        id: Date.now(),
      }));
    }
    inputValueRef.current.value = '';
  }

  return (
    <div className={style.container}>
      <input ref={inputValueRef} type="text" />
      <button onClick={handleAdder}>Add</button>
      {todo.map(item => (
        <TodoItem
          key = {item.id}
          id = {item.id}
          value = {item.value}
        />
      ))}
    </div>
  )
}

export default Todo;