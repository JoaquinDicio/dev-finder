import React, { useState, useEffect } from 'react'
import './GeneralContainer.css'
import UserInfo from '../UserInfo/UserInfo'
import NoDataMsg from '../NoDataMsg/NoDataMsg'

export default function GeneralContainer({ DATA }) {

  return (
    <div className='d-flex justify-content-center align-items-center main-container col-md-10'>
      {DATA==false?
        <div className='d-flex justify-content-center justify-items-center'>
          <NoDataMsg />
        </div>
        :
        <UserInfo DATA={DATA} />
      }
    </div>
  )
}
