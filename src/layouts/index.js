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

import favicon from '../favicon.ico'

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
      link={[{ rel: 'icon', href: favicon }]}
    />
    <Header linkList={linkList} />
    {children()}
    <Footer linkList={linkList} />
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter25441691 = new Ya.Metrika({id:25441691, webvisor:true, clickmap:true, trackLinks:true, trackHash:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/25441691" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
