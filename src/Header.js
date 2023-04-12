import React from 'react'
import './Header.css'

const Header = (props) => {
  return <header className="header">
    <h1>{props.title}</h1>
    <nav>
      <ul>
        <li>{props.home}</li>
        <li>{props.animals} ({props.aCount})</li>
        <li>{props.birds} ({props.bCount})</li>
      </ul>
    </nav>
  </header>
}

export default Header