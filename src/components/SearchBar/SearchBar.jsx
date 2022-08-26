import React from 'react'
import './SearchBar.css'

export default function SearchBar({setSearchInput,searchInput,getUser}) {
  
  return (
    <div className='row header justify-content-center align-items-center'>
      <div className="col-10 searchbarContainer row">
        <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Search user' className="col-10 searchBar" />
        <button onClick={getUser} className='btn btn-search col'>Find!</button>
      </div>
    </div>
  )
}
