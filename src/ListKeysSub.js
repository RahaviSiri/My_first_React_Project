import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const ListKeysSub = ({items,setItems,handleCheck,handleTrash}) => {
  return (
    <ul>
        {items.map(item => (
            // Key for control state
            <li className='item' key={item.id}>
                <input type = "checkbox" onChange={() => handleCheck(item.id)} checked = {item.checked}/>
                <label onDoubleClick={() => handleCheck(item.id)} style={(item.checked) ? {textDecoration:'line-through'}:null}>{item.title}</label>
                <FaTrashCan role='button' tabIndex={1} onClick={() => handleTrash(item.id)}/>
            </li>
        ))}
    </ul>
  )
}

export default ListKeysSub