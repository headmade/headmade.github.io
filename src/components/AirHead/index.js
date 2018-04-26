import React from 'react'

import MouseScroll from '../MouseScroll'
import AnimateScroll from "../../javascripts/animateScroll"

import LogoHead from './head.svg'
import ShadowHead from './shadow.svg'
import './AirHead.sass'


const AirHead = () => (
  <section className="head__wrapper">
    <div className="row">
      <div className="columns">
        <div className="head">
          <div className="head__img">
            <img src={LogoHead} alt="LogoHead"/>
          </div>
          <div className="head__shadow">
            <img src={ShadowHead} alt="ShadowHead"/>
          </div>
          <MouseScroll />
        </div>
      </div>
    </div>
  </section>
)

export default AirHead