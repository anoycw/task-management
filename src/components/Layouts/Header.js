import React from 'react'
import apexLogo from './Logo/apex_logo.png'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark header-bg">
      <div class="container-fluid justify-content-around">
        <img src={apexLogo} alt='logo' height={50} width={200} />
        <h3 className='color-orange'>Task Management</h3>
      </div>
    </nav>

  )
}

export default Header