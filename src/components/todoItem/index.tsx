import { useAppDispatch } from "../../app/hooks"
import { deleteTodo } from "../../features/todo/TodoSlice"

function TodoItem({value, id}: {value: string, id: number}) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div key={id}>
      <h4>{value}</h4>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default  TodoItem;