import React from 'react'
import Link from 'gatsby-link'
import MouseScroll from '../components/MouseScroll/index'

import desktop from '../images/projects/tovar.link/tovar.link__desktop.png'
import tablet from '../images/projects/tovar.link/Tovar.Link__tablet.png'
import phone from '../images/projects/tovar.link/Tovar.Link__phone.png'
import lending from '../images/projects/tovar.link/Tovar.Link__lp.png'

import AnimateScroll from "../javascripts/AnimateScroll";
import monitorBtns from "../javascripts/monitorBtns";

const TovarLink = () => (
  <main className="myMain">
    <section className="project">
      <div className="row">
        <div className="columns large-6 small-12 medium-order-2 small-order-2 large-order-1">
          <div className="project__lending">
            <div className="project__lending-img">
              <img src={lending} alt="lending"/>
            </div>
            <div onClick={()=>AnimateScroll(3000, ".project__lending-img")}>
              <MouseScroll />
            </div>
          </div>
        </div>
        <div className="columns large-6 small-12 small-order-1 medium-order-1 large-order-2">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <Link to="/" className="breadcrumbs__link">Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to="/projects" className="breadcrumbs__link">Проекты</Link>
            </li>
            <li className="breadcrumbs__item">
              Tovar.link
            </li>
          </ul>
          <div className="info">
            <h1 className="h1">Tovar.link</h1>
            <hr className="hr" />
            <h3 className="item__caption">Описание</h3>
            <p className="info__text">Всё просто! Проект даёт простым людям возможность монетизировать простой и любимый процесс - шаринг ссылок в соц.сетях, а комиссия за покупки друзей по этим ссылкам просто приходит на мобильный телефон.</p>
            <hr className="hr"/>
            <h3 className="item__caption">Наше участие</h3>
            <ul className="info__list">
              <li className="info__item">
                <span>Бизнес-идея и концепция проекта</span>
              </li>
              <li className="info__item">
                <span>Дизайн и разработка</span>
              </li>
              <li className="info__item">
                <span>Эксплуатация и сопровождение</span>
              </li>
              <li className="info__item">
                <span>Поиск партнёров и инвесторов</span>
              </li>
            </ul>
            <hr className="hr"/>
            <a target="_blank" href='https://tovar.link/' className="btn">Перейти на сайт</a>
          </div>
        </div>
        <div className="columns large-6 small-12 medium-order-3 small-order-3">
          <div className="statistics info">
            <h3 className="item__caption">Показатели</h3>
            <ul className="info__list">
              <li className="info__item">
                <span>Сокращённых ссылок: более 500 000</span>
              </li>
              <li className="info__item">
                <span>Уникальных пользователей: более 18 000</span>
              </li>
              <li className="info__item">
                <span>Количество кликов в день: более 10 000</span>
              </li>
            </ul>
            <hr className="hr"/>
            <h3 className="item__caption">Технологии</h3>
            <ul className="info__list">
              <li className="info__item">
                <span>html, css, sass</span>
              </li>
              <li className="info__item">
                <span>javascript, webpack</span>
              </li>
              <li className="info__item">
                <span>микросервисная архитектура, go, grpc</span>
              </li>
              <li className="info__item">
                <span>PostgreSQL, NATS</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns large-6 small-12 medium-order-4 small-order-4">
          <div className="monitor-wrapper--js">
            <div className="monitor-block statistics">
              <div className="monitor__wrapper">
                <div className="monitor monitor--js desktop">
                  <div className="monitor__stand" />
                  <div className="monitor__stand-bot" />
                  <div className="monitor__img-wrapper">
                    <img src={desktop} alt="desktop" className="monitor__img monitor__img--desktop"/>
                    <img src={tablet} alt="tablet" className="monitor__img monitor__img--tablet"/>
                    <img src={phone} alt="phone" className="monitor__img monitor__img--phone"/>
                  </div>
                </div>
              </div>
            </div>
            <ul className="monitor__btn-list">
              <li className="btn-list__item btn-list__item--js active" data-monitor='desktop' onClick={(e)=>monitorBtns(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" height="48px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="48px">
                  <path d="M43,35H29.195c0.595,3.301,2.573,5.572,4.401,7H36c0.553,0,1,0.447,1,1  s-0.447,1-1,1H12c-0.553,0-1-0.447-1-1s0.447-1,1-1h2.403c1.827-1.428,3.807-3.699,4.401-7H5c-2.209,0-4-1.791-4-4V8  c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v23C47,33.209,45.209,35,43,35z M17.397,42h13.205c-1.595-1.682-3.015-3.976-3.459-7  h-6.287C20.412,38.024,18.992,40.318,17.397,42z M45,8c0-1.104-0.896-2-2-2H5C3.896,6,3,6.896,3,8v19l0,0h42V8z M45,29H3l0,0v2  c0,1.104,0.896,2,2,2h14l0,0h10l0,0h14c1.104,0,2-0.896,2-2V29z M24,32c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1  S24.553,32,24,32z" />
                </svg>
              </li>
              <li className="btn-list__item btn-list__item--js rotate" data-monitor='tablet' onClick={(e)=>monitorBtns(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 33.994 33.994">
                  <g>
                    <path d="M27.125,0H6.867C5.59,0,4.562,1.033,4.562,2.309v29.377c0,1.272,1.028,2.308,2.305,2.308h20.258   c1.273,0,2.306-1.035,2.306-2.308V2.309C29.433,1.033,28.399,0,27.125,0z M16.997,33.129c-0.758,0-1.371-0.613-1.371-1.37   c0-0.758,0.613-1.372,1.371-1.372c0.756,0,1.371,0.614,1.371,1.372C18.368,32.516,17.753,33.129,16.997,33.129z M27.098,29.186   H6.896V2.774h20.202V29.186z" />
                  </g>
                </svg>
              </li>
              <li className="btn-list__item btn-list__item--js" data-monitor='phone' onClick={(e)=>monitorBtns(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="48px" id="Capa_1" x="0px" y="0px" viewBox="0 0 472.807 472.807">
                  <g>
                    <path d="M338.649,0H134.158c-13.567,0-24.605,10.632-24.605,23.695v425.433    c0,13.046,11.03,23.679,24.605,23.679h204.491c13.575,0,24.605-10.632,24.605-23.679V23.687C363.254,10.624,352.223,0,338.649,0z     M200.707,36.822H272.1v5.007h-71.393C200.707,41.83,200.707,36.822,200.707,36.822z M236.407,448.006    c-7.592,0-13.762-6.17-13.762-13.754c0-7.576,6.17-13.737,13.762-13.737c7.592,0,13.762,6.17,13.762,13.737    C250.169,441.837,243.999,448.006,236.407,448.006z M346.46,396.52H126.379V70.337H346.46V396.52z" />
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default TovarLink