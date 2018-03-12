import React from 'react'
import Link from 'gatsby-link'

import tovarLink from '../images/projects/tovar.link/tovar.link__desktop.png'
import flowersKzn from '../images/projects/flowers.kzn/flowers.kzn__desktop.png'

const projects = [
  {
    key: 1, img: tovarLink, name: "Tovar.link", path: '/tovar.link',
    info: 'Всё просто! Проект даёт простым людям возможность монетизировать простой и любимый процесс - шаринг ссылок в соц.сетях, а комиссия за покупки друзей по этим ссылкам просто приходит на мобильный телефон.'
  },
  {
    key: 2, img: flowersKzn, name: "flowers.kzn", path: '/flowers.kzn',
    info: 'Проект для проведения конкурсов и голосований среди граждан на примере "цветочного фестиваля" в г.Казань.'
  }
]

const Projects = () => (
  <main className="myMain">
    <section className="projects__wrapper">
      <div className="row">
        <div className="columns">
          <div className="projects">
            <h1 className="h1">Проекты</h1>
            <ul className="projects__list">
              {projects.map(project =>
                <li key={project.key} className="list__item">
                  <div className="columns large-6 small-12">
                    <div className="monitor-block">
                      <div className="monitor__wrapper">
                        <div className="monitor desktop">
                          <div className="monitor__stand" />
                          <div className="monitor__stand-bot" />
                          <div className="monitor__img-wrapper">
                            <img src={project.img} alt={project.name}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns large-6 small-12">
                    <div className="info">
                      <h3 className="info__caption">{project.name}</h3>
                      <p className="info__text">{project.info}</p>
                      <Link to={project.path} className="btn">Подробнее</Link>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Projects