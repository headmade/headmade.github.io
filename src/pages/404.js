import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <main className="myMain">
    <Helmet title="NotFoundPage(404)" />
    <div className="NotFoundPage">
      <h1 className="h1">Страница не найдена (404).</h1>
      <p className="p">Вы просто попали в маршрут, который не существует.</p>
    </div>
  </main>
)

export default NotFoundPage
