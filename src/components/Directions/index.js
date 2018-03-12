import React from 'react'

import design from './design.svg'
import frontend from './frontend.svg'
import backend from './backend.svg'
import mobile from './mobile.svg'

import './Directions.sass'

const Directions = () => (
  <section className="directions__wrapper">
    <div className="row">
      <div className="columns">
        <div className="directions">
          <h1 className="h1">Направления</h1>
          <ul className="card__list">
            <li className="card__item">
              <div className="card__img">
                <img src={design} alt="design"/>
              </div>
              <h3 className="item__caption">Дизайн</h3>
              <p className="item__text">UX / UI</p>
            </li>
            <li className="card__item">
              <div className="card__img">
                <img src={frontend} alt="frontend"/>
              </div>
              <h3 className="item__caption">Frontend</h3>
              <p className="item__text">React / HTML5 / CSS3 / ES6 / Sass / Angular / CoffeeScript / Backbone</p>
            </li>
            <li className="card__item">
              <div className="card__img">
                <img src={backend} alt="backend"/>
              </div>
              <h3 className="item__caption">Backend</h3>
              <p className="item__text">Ruby / Elixir / Node.js / GO / Erlang / C / C++ / MySql / Postgres / MemCache / Redis / NATS</p>
            </li>
            <li className="card__item">
              <div className="card__img">
                <img src={mobile} alt="mobile"/>
              </div>
              <h3 className="item__caption">Мобильная разработка</h3>
              <p className="item__text">iOS / Android / React Native / Windows / Ionic</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Directions