import React from 'react'
import Link from 'gatsby-link'
import profile from './profile.png'

const AboutPage = () => (
  <div>
    <h2>About Me</h2>
     
    <div className="row">
          <div className="col-md-3" >
            <img src={profile} className="profile-picture" />
          </div>
          <div className="col-md-6">
            <p>Front end developer who loves Javascript | Badminton | Guitar</p>
            <Link to="/page-2/">Go to page 2</Link>
            
          </div>
          
        </div>
  </div>
)

export default AboutPage
