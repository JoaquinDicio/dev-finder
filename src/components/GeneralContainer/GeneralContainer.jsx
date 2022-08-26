import React, { useState, useEffect } from 'react'
import './GeneralContainer.css'
import Header from '../Header/Header'
import UserInfo from '../UserInfo/UserInfo'

export default function GeneralContainer({DATA}) {

  return (
    <div className='main-container col-md-10'>
      <UserInfo DATA={DATA} />
    </div>
  )
}
