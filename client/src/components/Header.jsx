import React from 'react'
import logo from '../assets/images/logo512.png'

const Header = () => {
  return (
    <div className='header'>
      <img alt='header logo' src={logo} className='header-logo' />
    </div>
  )
}

export default Header