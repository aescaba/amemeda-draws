import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            // color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {/* i could make this more efficient later but im really only ever gonna have a few links its FINE!!!! */}
      <ul style={{
        // marginLeft: '0',
        // listStyleType:'none',
        // textAlign: 'right'
        }}
      >
        <li><Link to="/digital">Digital</Link></li>
        <li><Link to="/traditional">Traditional</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li><Link to="/about">About</Link></li>
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
