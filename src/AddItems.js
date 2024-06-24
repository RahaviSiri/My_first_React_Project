import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useRef} from 'react'

const AddItems = ({newItem, setNewItem, handleSubmit}) => {
  // UseRef
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" id='addItem' name='addItem' placeholder='Add Item' required value={newItem} onChange = {(e) => setNewItem(e.target.value)} ref={inputRef}/>
        <button type='submit' onClick={() => inputRef.current.focus()}><FaPlus/></button>
    </form>
  )
}

export default AddItems