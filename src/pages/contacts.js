import React from 'react'
import Directions from '../components/Directions'

const About = () => (
  <main className="myMain">
    <Directions />
    <section className="about__wrapper">
      <div className="row">
        <div className="columns">
          <div className="about">
            <h2 className="h2">Основные направления деятельности команды:</h2>
            <ul className="ul">
              <li className="li">- разработка web-пороектов: как целиком, так и отдельными компонентами</li>
              <li className="li">- консалтинговые услуги: помогаем организовать правильные процессы разработки</li>
              <li className="li">- project resque: временное усиление команды заказчика с целью вытянуть "покосившийся" проект</li>
            </ul>
            <h2 className="h2">Направление consulting:</h2>
            <ul className="ul">
              <li className="li">- agile coaching, scrum, kanban, корпоративная культура</li>
              <li className="li">- помощь и экспертные рекомендации по выбору технологий и инструментов</li>
              <li className="li">- UX-проектирование(сбор/анализ требований бизнеса и пользователей, сценарии, прототипиование, юзабилити тестирование)</li>
            </ul>
            <h2 className="h2">Направление "project resque":</h2>
            <p className="p">Накопленный опыт членов команды Headmade позволяет быстро влиться в существующий коллектив проекта заказчика и начать активно способствовать ускорению процесса разработки.</p>
            <h2 className="h2">У нас есть успешный опыт "вытягивания":</h2>
            <ul className="ul">
              <li className="li">- затянувшихся проектов</li>
              <li className="li">- проектов, зашедших в архитектурный тупик</li>
              <li className="li">- проектов, использующих несоответствующие поставленной задаче технологии и инструменты</li>
              <li className="li">- проектов, из которых внезапно уходят ведущие разработчики</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default About