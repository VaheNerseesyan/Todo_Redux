import { useAppDispatch } from "../../app/hooks"
import { editTodo } from "../../features/todo/TodoSlice"
import { useState } from "react"

function EditItem({ value, id, handleEdit }: { value: string; id: number; handleEdit: () => void }) {
  const dispatch = useAppDispatch();
  const [updateValue, setUpdateValue] = useState(value);

  const editItem = () => {
    dispatch(editTodo({ id, value: updateValue })); // Matches the expected type
    handleEdit();
  }

  const handleCancel = () => {
    handleEdit();
  }

  return (
    <div>
      <input
        onChange={event => {setUpdateValue(event.target.value)}}
        value={updateValue}
        type="text"
      />
      <button onClick={editItem}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default EditItem;