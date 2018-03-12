import React from 'react'
import Link from 'gatsby-link'

import './ContactUs.sass'

const ContactUs = () => (
  <section className="contactUs__wrapper">
    <div className="row">
      <div className="columns">
        <div className="contactUs">
          <h2 className="h2">Напишите нам</h2>
          <h3 className="h3">Расскажите о своей цели/проблеме - и мы предложим оптимальный способ её достижения/решения</h3>
          <Link to="/contacts" className="btn">Рассказать</Link>
        </div>
      </div>
    </div>
  </section>
)

export default ContactUs