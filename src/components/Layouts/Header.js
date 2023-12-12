import React from 'react'
import logo from './Logo/logo192.png'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark header-bg">
      <div class="container-fluid justify-content-around">
        <img src={logo} alt='logo' height={90} width={90} />
        <h3 className='color-orange'>Task Management</h3>
      </div>
    </nav>

  )
}

export default Header