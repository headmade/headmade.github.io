import React from 'react'
import Helmet from 'react-helmet'

const About = () => (
  <main className="myMain">
    <Helmet title="Contacts" />
    <section className="contacts__wrapper">
      <div className="row">
        <div className="columns">
          <div className="contacts">
            <h1 className="h1">ООО «Хэдмейд»</h1>
            <div className="icon message">
              <a href="mailto:info@headmade.pro" className="icon__link">info@headmade.pro</a>
            </div>
            <div className="icon phone">
              <a href="tel:+78432599923" className="icon__link">+7(843)259-99-23</a>
            </div>
            <div className="icon map">
              <a className="icon__link">г. Казань, ул.Карла Маркса, д.5, оф.114</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default About
