import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
export default function Header({getUser,setSearchInput,searchInput}) {
  return (
    <SearchBar getUser={getUser} setSearchInput={setSearchInput} searchInput={searchInput}/>
  )
}
