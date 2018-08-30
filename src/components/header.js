import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/menu'


const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#222',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.45rem 0.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '400'
          }}
        >
          {siteTitle}
          
        </Link>

        <span style={{float: 'right'}}><Menu /></span>
        
      </h1>
    </div>
  </div>
)

export default Header
