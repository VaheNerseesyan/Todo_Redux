import { useAppDispatch, useAppSelector } from "../../app/hooks"
import style from './Todo.module.css'
import { useRef, useState } from "react"
import { selectTodos, addTodo } from "./TodoSlice"
import TodoItem from "../../components/todoItem"

function  Todo() {
  const inputValueRef = useRef('');
  const todo = useAppSelector(selectTodos)
  const dispatch = useAppDispatch();

  const handleAdder = () => {
    dispatch(addTodo({
      value: inputValueRef.current.value,
      id: Date.now(),
    }));
    inputValueRef.current.value = ''
  }

  console.log(todo)

  return (
    <div className={style.container}>
      <input ref={inputValueRef} type="text" />
      <button onClick={handleAdder}>Add</button>
      {todo.map(item => (
        <TodoItem
        key = {item.id}
        value = {item.value}
        id = {item.id}
        />
      ))}

    </div>
  )
}

export default Todo;