import React from 'react'

const ListSearchItems = ({search,setSearch}) => {
  return (
    // onsubmit at form for enter button in keyboard
    <form onSubmit={(e) => e.preventDefault()} className='searchForm'>
        <label htmlFor="search">Search</label>
        <input type="text" id='search' placeholder='Enter to Search' role='searchbox'value={search} onChange = {e => setSearch(e.target.value)}/>
    </form>
  )
}

export default ListSearchItems