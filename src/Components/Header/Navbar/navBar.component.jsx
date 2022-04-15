import React from 'react'
import './navBar.styles.scss'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='container-fluid main-menu'>
        <div className='  navBar '>
        <div className=" navbar">
        
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm text-white navbar-light">
    
  
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse " data-bs-target="#navbarNavDropdown " aria-controls="navbarNavDropdown " aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse "  id="navbarNavDropdown ">
      <ul className="navbar-nav">
        
      <li className="nav-item ">
          {/* <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a> */}
           <Link  className="nav-link" id="navbarDropdownMenuLink" to='/'  aria-expanded="false" >
            Home
          </Link>
        </li>
        <li className="nav-item ">
          <Link  className="nav-link"  id="navbarDropdownMenuLink" to='/about'  aria-expanded="false" >
            About
          </Link>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Project 
          </a>

          
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink ">
              <li><Link onClick={()=>{
            
          }}  className="dropdown-item"  to='/project/strengthening-access-to-justice'  >
              Strengthening Access to Justice
            </Link></li>
            <li><Link  className="dropdown-item" id="navbarDropdownMenuLink" to='project/women-leadership-skill-development'  >
            Women Leadership & Skill Development
            </Link></li>
            
          </ul>
        </li>
        <li className="nav-item ">
          {/*<a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
           */}
           <Link  className="nav-link" id="navbarDropdownMenuLink" to='/events'  aria-expanded="false" >
            Events
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><Link  className="dropdown-item" id="navbarDropdownMenuLink" to='/resources/annual_report '  aria-expanded="false" >
          Annual Report
          </Link></li>
          <li><Link  className="dropdown-item" id="navbarDropdownMenuLink" to='/resources/case_study_report  '  aria-expanded="false" >
          Case Studies Report
          </Link></li>
          <li><Link  className="dropdown-item" id="navbarDropdownMenuLink" to='/resources/article'  aria-expanded="false" >
          Article
          </Link></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link con" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Get Involved
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
          <li><Link  className="dropdown-item a" id="navbarDropdownMenuLink" to='/get-involved/announcement '  aria-expanded="false" >
          Announcement
          </Link></li>
          <li><Link  className="dropdown-item" id="navbarDropdownMenuLink" to='/get-involved/volunteer '  aria-expanded="false" >
          Volunteer
          </Link></li>
          <li><Link  className="dropdown-item" id="navbarDropdownMenuLink" to='/get-involved/donate '  aria-expanded="false" >
          Donate
          </Link></li>
          </ul>
        </li>
        
        <li className="nav-item ">
        <Link  className="nav-link" id="navbarDropdownMenuLink" to='/contact'  aria-expanded="false" >
            Contact
          </Link>
        </li>
      </ul>
    </div>
 
        </nav>
        

        </div>
        </div>
    </div>
  )
}
