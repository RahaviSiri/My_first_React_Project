import { FaTrashCan } from "react-icons/fa6";
import ListKeysSub from "./ListKeysSub";

const ListKeys = ({items,setItems,handleCheck,handleTrash}) => {
    // const [items,setItems] = useState(
    //     [
    //         {
    //             id:1,
    //             checked:true,
    //             item:"Practice Coding"
    //         },
    //         {
    //             id:2,
    //             checked:false,
    //             item:"Learning Coding"
    //         },
    //         {
    //             id:3,
    //             checked:true,
    //             item:"Writing Coding"
    //         }
    //     ]
    // );
    // function handleCheck(id){
    //     const newArray = items.map(item => (
    //         item.id === id ? {...item,checked:!item.checked} : item
    //         // {...item,checked:!item.checked} update new checked as object
    //     ));
    //     setItems(newArray);
    //     localStorage.setItem("todo_list", JSON.stringify(newArray));
    // }
    // function handleTrash(id){
    //     const newArray = items.filter(item => item.id !== id);
    //     setItems(newArray);
    //     localStorage.setItem("todo_list", JSON.stringify(newArray));
    // }
    return (
        // Fragments
        <>
            {(items.length) ? (
                // <ul>
                //     {items.map(item => (
                //         // Key for control state
                //         <li className='item' key={item.id}>
                //             <input type = "checkbox" onChange={() => handleCheck(item.id)} checked = {item.checked}/>
                //             <label onDoubleClick={() => handleCheck(item.id)} style={(item.checked) ? {textDecoration:'line-through'}:null}>{item.item}</label>
                //             <FaTrashCan role='button' tabIndex={1} onClick={() => handleTrash(item.id)}/>
                //         </li>
                //     ))}
                // </ul>
                // Abstraction .......
                <ListKeysSub items = {items} setItems = {setItems} handleCheck = {handleCheck} handleTrash = {handleTrash}/>) 
                : <p>Your List is Empty</p>
            }
        </>
    )
}

export default ListKeys