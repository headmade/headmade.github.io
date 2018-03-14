import React from 'react'
import Link from 'gatsby-link'

const Projects = ({data}) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const allProjects = edges
  return (
    <main className="myMain">
      <section className="projects__wrapper">
        <div className="row">
          <div className="columns">
            <div className="projects">
              <h1 className="h1">Проекты</h1>
              <ul className="projects__list">
                {allProjects.map(project =>
                  <li key={project.node.frontmatter.order} className="list__item">
                    <div className="columns large-6 small-12">
                      <div className="monitor-block">
                        <div className="monitor__wrapper">
                          <div className="monitor desktop">
                            <div className="monitor__stand"/>
                            <div className="monitor__stand-bot"/>
                            <div className="monitor__img-wrapper">
                              <img src={project.node.frontmatter.desktopImg} alt={project.node.frontmatter.title}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns large-6 small-12">
                      <div className="info">
                        <h3 className="info__caption">{project.node.frontmatter.title}</h3>
                        <p className="info__text">{project.node.frontmatter.description}</p>
                        <Link to={project.node.frontmatter.path} className="btn">Подробнее</Link>
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
}

export const pageQuery = graphql`
 query allProjects{
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              order
              title
              description
              desktopImg
            }
          }
        }
      }
    }
`
export default Projects