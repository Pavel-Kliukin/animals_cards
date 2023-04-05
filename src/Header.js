import React from 'react'
import './Header.css'

const Header = (props) => {
  return <header className="header">
    <h1>{props.title}</h1>
    <div className='headerLine'></div>
  </header>
}

export default Header