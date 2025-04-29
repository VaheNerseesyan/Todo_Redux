import { useAppDispatch } from "../../app/hooks"
import { deleteTodo} from "../../features/todo/TodoSlice"
import EditItem from "../editItem"
import { useState } from "react"

function TodoItem({ value, id}: { value: string, id: number }) {
  const dispatch = useAppDispatch()
  const [editMode, setEditMode] = useState(false)

  const handleEdit = () => {
    setEditMode(!editMode)
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div key={id}>
      {!editMode ? (
        <div>
          <h4>{value}</h4>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <EditItem
          value={value}
          id={id}
          handleEdit={handleEdit}
        />
      )}
    </div>
  )
}

export default TodoItem
