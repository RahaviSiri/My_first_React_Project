import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import Content from './Content';
import Footer from './Footer';
import ListKeys from './ListKeys';
import AddItems from './AddItems';
import apiRequest from './apiRequest';
import ListSearchItems from './ListSearchItems';
import React, { useState, useEffect } from 'react'

function App() {
    // function getName(){
    //   const names = ["Rahavi","Aanchikan","Jas","Thenusan","Ajusan"];
    //   let ran = Math.floor(Math.random()*5);
    //   return names[ran];
    // }
    // const name = "Rahavi"

    // const [items,setItems] = useState(JSON.parse(localStorage.getItem('todo_list'))||[]);
    const [items,setItems] = useState([]);
      // [
      //     {
      //         id:1,
      //         checked:true,
      //         item:"Practice Coding"
      //     },
      //     {
      //         id:2,
      //         checked:false,
      //         item:"Learning Coding"
      //     },
      //     {
      //         id:3,
      //         checked:true,
      //         item:"Writing Coding"
      //     }
      // ]
      
  // UseEffect
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [fetchError,setFetchError] = useState(null);
  const [isLoading, setIsLoadingl] = useState (true)
  // console.log("Before loading");
  // useEffect (() => console.log("Loading"),[items]);
  // console.log("After loading");
  // Before Loading,After Loading then Loading

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('todo_list'))
  // },[]);

  //FROM SERVER FETCT DATA
  useEffect (() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        // console.log(response) 
        if(!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        // console.log(listItems) 
        setItems (listItems)
        setFetchError (null)
      }
      catch (err){
        setFetchError(err.message);
      }
      finally{
        setIsLoadingl(false);
      }
    }
    setTimeout (() =>{
      (async() => await fetchItems ()) ()},2000)
  },[]) 
    

  // For Input
  const [newItem,setNewItem] = useState("");
  async function addItem(item){
    const id = items.length? items[items.length - 1 ].id+1 : 1;
    const addNewItem = {id, checked : false, item};
    const listItems = [...items, addNewItem]
    // with already existing items add new items and name it as listItems.
    setItems(listItems)

    // FOR SERVER
    const postoptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON. stringify(addNewItem)
    }
    const result = await apiRequest (API_URL,postoptions)
    if(result) setFetchError(result)
    // localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  // for search
  const [search, setSearch] = useState('');
  
  // for content of Page.
  async function handleCheck(id){
      const newArray = items.map(item => (
          item.id === id ? {...item,checked:!item.checked} : item
          // {...item,checked:!item.checked} update new checked as object
      ));
      setItems(newArray);

      // FOR SERVER
      const myItem = newArray.filter((item) => item.id===id)
      const updateoptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON. stringify({checked:myItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest (reqUrl,updateoptions)
      if(result) setFetchError(result)
      // localStorage.setItem("todo_list", JSON.stringify(newArray));
  }

  async function handleTrash(id){
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray);
      // localStorage.setItem("todo_list", JSON.stringify(newArray));

      // FOR SERVER
      const deleteoptions = {
        method: 'DELETE'
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,deleteoptions)
      if(result) setFetchError(result)
  }

  return (
    <div className='App'>
      {/* Passing aruguments to Header, Footer that is Props */}
      <Header title = "Aanchikan Rahavi"/>

      <AddItems 
        newItem = {newItem} 
        setNewItem = {setNewItem} 
        handleSubmit = {handleSubmit}/>

      <ListSearchItems 
        search = {search} 
        setSearch = {setSearch}/>
      <main>
          {isLoading && <p> Loading items..</p>}
          {fetchError && <p> {`Error: ${fetchError}`} </p>}
          {!isLoading && !fetchError && <ListKeys  
            items = {items}
            // setItems = {setItems} 
            handleCheck = {handleCheck} 
            handleTrash = {handleTrash}/>
          }
          {/* setItems = {setItems}  no necessary to pass it we are handling this here by methods. */}
      </main>
      
      <Footer 
        length = {items.length}/>

        
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>Hi {getName()}</div>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React More Happiliy
        </a>
        <p>HI {name}</p> 
        {name} identify name as variable. {} needed here JSS
      </header> */}
    </div>
  );
}

export default App;
