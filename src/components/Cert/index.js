import React from 'react'

import toggleOpen from '../../decorators/toggleOpen'

import cert1 from './cert.jpg'

import './Cert.sass'

const Cert = ({isOpen, toggleOpen}) => {

  return (
    <section className="cert__wrapper">
      <div className="row">
        <div className="columns">
          <div className="cert">
            <h1 className="h1">Сертификаты</h1>
            <ul className="card__list">
              <li className="card__item">
                <div className="card__img">
                  <div className="img__mini">
                    <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                  </div>
                  {isOpen &&
                    <div className="img__normal">
                      <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                    </div>
                  }
                </div>
                <h3 className="item__caption">Заголовок</h3>
                <p className="item__text">Описание Описание Описание Описание Описание Описание Описание</p>
              </li>
              <li className="card__item">
                <div className="card__img">
                  <div className="img__mini">
                    <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                  </div>
                  {isOpen &&
                  <div className="img__normal">
                    <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                  </div>
                  }
                </div>
                <h3 className="item__caption">Заголовок</h3>
                <p className="item__text">Описание Описание Описание Описание Описание Описание Описание</p>
              </li>
              <li className="card__item">
                <div className="card__img">
                  <div className="img__mini">
                    <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                  </div>
                  {isOpen &&
                  <div className="img__normal">
                    <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                  </div>
                  }
                </div>
                <h3 className="item__caption">Заголовок</h3>
                <p className="item__text">Описание Описание Описание Описание Описание Описание Описание</p>
              </li>
              <li className="card__item">
                <div className="card__img">
                  <div className="img__mini">
                    <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                  </div>
                  {isOpen &&
                  <div className="img__normal">
                    <img onClick={toggleOpen} src={cert1} alt="cert1"/>
                  </div>
                  }
                </div>
                <h3 className="item__caption">Заголовок</h3>
                <p className="item__text">Описание Описание Описание Описание Описание Описание Описание</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}



export default toggleOpen(Cert)