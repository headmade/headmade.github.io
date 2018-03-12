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

const linkList = [
  {linkPath: '/projects', linkName: 'Проекты', linkKey: 1},
  {linkPath: '/contacts', linkName: 'Контакты', linkKey: 2},
  {linkPath: '/about', linkName: 'О нас', linkKey: 3}
]

const TemplateWrapper = ({ children }) => (
  <div className='generalWrapper'>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header linkList={linkList} />
    <main className="myMain">
      {children()}
    </main>
    <Footer linkList={linkList} />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
