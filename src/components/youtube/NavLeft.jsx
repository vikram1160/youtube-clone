import React from 'react'
import '../../styles/youtube/NavLeft.css'

function NavLeft() {
    return (
        <div className='nav-left-container'>
            <div className="menu-bars">
                <i class="fa-solid fa-bars"></i>    
            </div>

            <div className="youtube-logo">
                <span className="youtube-icon"><i class="fa-brands fa-youtube"></i></span>
                <span className="logo-text">YouTube</span>
            </div>
        </div>
    )
}

export default NavLeft
