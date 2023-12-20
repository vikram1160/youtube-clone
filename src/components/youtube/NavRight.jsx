import React from 'react'
import '../../styles/youtube/NavRight.css'

function NavRight() {
  return (
    <div className='nav-right-container'>
      <div className="right-line">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <div className="right-button">
          <button className="signin-btn">
            <i class="fa-regular fa-user"></i> 
            Sign in
          </button>
      </div>
    </div>
  )
}

export default NavRight
