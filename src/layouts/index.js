import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../style/general.scss'

const headerList = [
  {linkPath: '/projects', linkName: 'Проекты'},
  {linkPath: '/contacts', linkName: 'Контакты'},
  {linkPath: '/about', linkName: 'О нас'},
]

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header headerList={headerList} />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
