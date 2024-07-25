import "./App.css"
import React, { useState } from 'react'
import NavItem from "./components/NavItem/NavItem"

function App() {

const [navigationItemsData] = useState([
  {title: "HOME"},
  {title: "TRAVEL"},
  {title: "BLOGS"},
  {title: "SUPPORT"},
])

  return (
    <div className="body">
      <div className="video-bg-container">
        <video autoPlay muted loop>
          <source src="./video/video1.mp4" type="video/mp4" />
        </video>
        <div className="bg-filter"></div>
      </div>
      <div className="header-content-section">
        <div className="navigation-and-logo-section">
          <div className="logo-section">
            <h2>Alpha Travel</h2>
          </div>
          <div className="navigation-section">
            {navigationItemsData.map((item) => {
              return <NavItem {...item}/>
            })}
          </div>
        </div>
        <div className="content-section">
          <h2>EXPLORE THE WORLD</h2>
          <button>Explore</button>
          <div className="destination-search-container">
            <input type="text"  placeholder="Look for your destination ..."/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App