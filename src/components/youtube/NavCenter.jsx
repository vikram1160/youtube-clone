import React from 'react'
import '../../styles/youtube/NavCenter.css'

function NavCenter() {
  return (
    <div className='nav-center-container'>
      <div className='box-icon'>
        <div className='input-box'>
          <input type="text" name="input" id="user-input" placeholder='Search..'/>
        </div>
        <div className="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className='mic-icon'>
        <i class="fa-solid fa-microphone"></i>
      </div>
    </div>
  )
}

export default NavCenter
