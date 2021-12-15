import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const links = [
  {
    name: 'Digital',
    url: '/digital'
  },
  {
    name: 'Traditional',
    url: '/traditional'
  },
  {
    name: 'Cards',
    url: '/cards'
  },
  {
    name: 'About',
    url: '/about'
  },
]

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      position: 'fixed',
      top: '0',
      width: '100%'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            // color: `white`,
            textDecoration: `none`,
            float: 'left'
            
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul 
        style={{
          marginLeft: '0',
          listStyleType:'none',
          float: 'right'
        }}
        >
        {links.map(link => (
            <li
            style={{
              display: 'inline',
              marginRight: '1rem',
              
            }}
            >
              <Link to={link.url}>{link.name}</Link></li>
          )
        )}
      </ul>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
