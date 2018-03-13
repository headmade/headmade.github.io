import React from 'react'
import Link from 'gatsby-link'
import toggleOpen from '../../decorators/toggleOpen'

import Logo from './headmade.png'
import './Header.sass'

class Header extends React.Component {

  render() {
    const {linkList, isOpen, toggleOpen} = this.props
    return (
      <header className='header' >
        <div className='row'>
          <div className='columns'>
            <nav className="header__nav">
              <div className="nav__logo">
                <Link className="nav__linkLogo" to="/">
                  <img src={Logo} alt="Logo"/>
                </Link>
              </div>
              <ul className={`nav__list ${isOpen ? 'nav__list--active' : ''}`}>
                {linkList.map(linkItem =>
                  <li key={linkItem.linkKey} className="nav__item">
                    <Link activeClassName='active' className="nav__link" to={linkItem.linkPath}>
                      {linkItem.linkName}
                    </Link>
                  </li>
                )}
              </ul>
              <div className="hamburger-wrapper">
                <button
                  className={`c-hamburger c-hamburger--htx ${isOpen ? 'active' : ''}`}
                  onClick={toggleOpen}
                >
                  <span>toggle men</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default toggleOpen(Header)
