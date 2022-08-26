import React from 'react'
import Header from '../components/Header/Header'
import GeneralContainer from '../components/GeneralContainer/GeneralContainer'
import {useState} from 'react'

export default function Home() {
let [searchInput, setSearchInput] = useState('')
  let [DATA, SETDATA] = useState([])
  //function to fetch github API
  function getUser(){
    fetch(`https://api.github.com/users/${searchInput}`).
      then((data) => data.json()).
      then((res) => SETDATA(res),
      console.log(DATA)).
      catch(
        (error) => console.log(error)
      )
  }

  return (
    <div className='app container-fluid d-flex flex-column justify-content-center align-items-center'>
      <Header getUser={getUser} setSearchInput={setSearchInput} searchInput={searchInput}></Header>
      <GeneralContainer DATA={DATA}></GeneralContainer>
   </div>
  )
}
