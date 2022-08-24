import React from 'react'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className='row header justify-content-center align-items-center'>
      <div className="col-10 searchbarContainer row">
        <input type="text" placeholder='Search user' className="col-10 searchBar" />
        <button className='btn btn-search col'>Find!</button>
      </div>
    </div>
  )
}
