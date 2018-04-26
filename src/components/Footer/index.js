import React from 'react'
import Link from 'gatsby-link'

import LogoHead from './head.svg'
import './Footer.sass'

const Footer = ({linkList}) => (
  <footer className='footer'>
    <div className='row'>
      <div className='columns'>
        <nav className="footer__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link logo-img" to='/'>
                <img src={LogoHead} alt="Logo"/>
              </Link>
            </li>
            {linkList.map(linkItem =>
              <li key={linkItem.linkKey} className="nav__item">
                <Link activeClassName='active' className="nav__link" to={linkItem.linkPath}>
                  {linkItem.linkName}
                </Link>
              </li>
            )}
          </ul>
          <p className="nav__coop">Copyright © 2011 - 2018 HeadMade</p>
        </nav>
      </div>
    </div>
  </footer>
)

export default Footer
