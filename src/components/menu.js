import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
    <div
        style={{
            marginBottom: '1.45rem'
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0.5rem 0rem',
                fontFamily:'sans-serif'
            }}
        >
            <h4 style={{ margin: 0, paddingRight:10, fontSize:'20px' }}>
                <Link
                    to="/about"
                    activeClassName="active"
                    className="menu-link"
                >
                    About Me
                </Link>


                <Link
                    to="/whatdoido"
                    activeClassName="active"
                    className="menu-link"
                >
                    What do I do
                </Link>
                <Link
                    to="/contact"
                    activeClassName="active"
                    className="menu-link"
                >
                    Contact
                </Link>
            </h4>
        </div>
    </div>
)

export default Menu
