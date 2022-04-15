import React from 'react'
import './aboutpage.styles.scss'
import image from '../../assets/aboutus.jpg'


export default function Aboutpage() {
  return (
    <div className='aboutPage '>
        
        <div className='aboutImgsection '>
          <img src={image} alt='This is About Image' />
        </div>
        <div className='aboutDetail'>
          <h6>WHAT WE BELIEVE</h6>
          <h2>Living in God’s amazing grace!</h2>
          <p>Conflict Victims’ Women National (CVWN) is a non-governmental organization registered in
              2020 for protecting the rights of conflict-affected women and providing a space for discourse in
              peace building and transitional justice.</p>

          <p>The organization was formed to provide a concrete framework for the movement and advocacy
            work that was done by the board members of this organization while working as a loose network.
            The organization is now working to develop various programs for conflict-affected women by
            employing intergenerational policy and is committed to the truth, justice and reparation issues of
            those women.</p>

          <p>CVWN aids transitional justice through leadership and women empowerment by including the
            conflict-affected women within its network. We have expertise and experience in transitional
            justice, victim rights, WPS NAP, rights of wives and families of disappeared persons, and
            survivors of rape and sexual violence.</p>

          <p>We intend to strive toward the upliftment of conflict victim women and foster victim-responsive
            transitional justice by implementing the Change- Engage- Empower- Transform philosophy. We
            work tirelessly to build an inclusive and fair society in which women conflict victims of all kinds
            are leaders and empowered to seek justice in a dignified manner.</p>
        </div>
    </div>
  )
}
