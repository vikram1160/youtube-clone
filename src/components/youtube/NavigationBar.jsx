import React from 'react'
import NavLeft from './NavLeft'
import NavCenter from './NavCenter'
import NavRight from './NavRight'
import '../../styles/youtube/NavigationBar.css'

function NavigationBar() {
  return (
    <div className='nav-container'>
        <NavLeft />
        <NavCenter />
        <NavRight />
    </div>
  )
}

export default NavigationBar
