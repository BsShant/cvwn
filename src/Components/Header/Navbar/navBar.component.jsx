import React from 'react'
import './navBar.styles.scss'

export default function NavBar() {
  return (
    <div className='container-fluid main-menu'>
        <div className='  navBar '>
        <div className=" navbar">
        
        <nav className="navbar navbar-expand-lg navbar-expand-md text-white navbar-light">
    
  
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
      <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="navbarDropdownMenuLink"  data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Project
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item " href="#"> Strengthening Access to Justice</a></li>
            <li><a className="dropdown-item" href="#"> Women Leadership & Skell Development</a></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#"> Annual Report</a></li>
            <li><a className="dropdown-item" href="#"> Case Studies Report</a></li>
            <li><a className="dropdown-item" href="#"> Article</a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link con" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Get Involved
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item a" href="#"> Announcement</a></li>
            <li><a className="dropdown-item" href="#"> Volunteer</a></li>
            <li><a className="dropdown-item" href="#"> Donate</a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link con" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
        </li>
      </ul>
    </div>
 
        </nav>
        

        </div>
        </div>
    </div>
  )
}
