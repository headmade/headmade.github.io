import React from 'react'

import strategy from './strategy.svg'
import design from './design.svg'
import development from './development.svg'

import './Expertise.sass'

const Expertise = () => (
  <section className="expertise__wrapper">
    <div className="row">
      <div className="columns">
        <div className="expertise">
          <h2 className="h2">Наши компетенции</h2>
          <h3 className="h3">Development done right</h3>
          <ul className="card__list">
            <li className="card__item">
              <div className="card__img">
                <img src={strategy} alt="strategy"/>
              </div>
              <h3 className="item__caption">Аналитика и проектирование</h3>
              <p className="item__text">Исследование, оптимизация и автоматизация бизнес-процессов, управление проектами</p>
            </li>
            <li className="card__item">
              <div className="card__img">
                <img src={design} alt="design"/>
              </div>
              <h3 className="item__caption">UX & UI Design</h3>
              <p className="item__text">Дизайн User Experience и пользовательских интерфейсов</p>
            </li>
            <li className="card__item">
              <div className="card__img">
                <img src={development} alt="development"/>
              </div>
              <h3 className="item__caption">Разработка</h3>
              <p className="item__text">Web- и мобильные приложения и системы, автоматизация бизнес-процессов</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Expertise
