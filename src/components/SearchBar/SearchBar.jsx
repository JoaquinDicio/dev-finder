import React from 'react'
import './SearchBar.css'
import {BiSearchAlt} from 'react-icons/bi'

export default function SearchBar({setSearchInput,searchInput,getUser}) {
  
  return (
    <div className='row header justify-content-center align-items-center'>
      <div className="col-10 searchbarContainer row">
        <input value={searchInput} onKeyDown={(e)=>e.key=='Enter'?getUser():''} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Search user' className="col-10 searchBar" />
        <button onClick={getUser} className='btn-search col'><BiSearchAlt className='search-icon'/></button>
      </div>
    </div>
  )
}
