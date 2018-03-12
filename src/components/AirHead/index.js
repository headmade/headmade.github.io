import React from 'react'
import MouseScroll from '../MouseScroll'

import LogoHead from './brain.png'
import ShadowHead from './head_shadow.png'
import './AirHead.sass'

const AirHead = () => (
  <section className="head__wrapper">
    <div className="row">
      <div className="columns">
        <div className="head">
          <div className="head__img">
            <img src={LogoHead} alt=""/>
          </div>
          <div className="head__shadow">
            <img src={ShadowHead} alt=""/>
          </div>
          <MouseScroll />
        </div>
      </div>
    </div>
  </section>
)

export default AirHead