import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
import '../style/general.scss'

// fonts
import '../fonts/pfagoraslabpro-bold.ttf'
import '../fonts/pfagoraslabpro-medium.ttf'
import '../fonts/pfagoraslabpro-thin.ttf'

import favicon from '../../static/favicon.ico'

const linkList = [
  {linkPath: '/projects', linkName: 'Проекты', linkKey: 1},
  {linkPath: '/contacts', linkName: 'Контакты', linkKey: 2},
  {linkPath: '/about', linkName: 'О нас', linkKey: 3}
]

class TemplateWrapper extends React.Component {
  render() {
    const {children} = this.props
    return (
      <div className='generalWrapper'>
        <Helmet
          title="HeadMade"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[{ rel: 'icon', href: favicon }]}
        />
        <Header linkList={linkList} />
        {children()}
        <Footer linkList={linkList} />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
