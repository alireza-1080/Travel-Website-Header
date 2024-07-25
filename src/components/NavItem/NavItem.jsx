import  "./NavItem.css";
import React from 'react'

function NavItem({title}) {
  return (
    <div className="nav-item-container">{title}</div>
  )
}

export default NavItem