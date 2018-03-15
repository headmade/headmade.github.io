import React from "react";
import Link from "gatsby-link";

const Projects = ({data: { allMarkdownRemark: { edges } }}) => (
  <main className="myMain">
    <section className="projects__wrapper">
      <div className="row">
        <div className="columns">
          <div className="projects">
            <h1 className="h1">Проекты</h1>
            <ul className="filters-list">
              <li className="filters-item">
                <Link activeClassName='active' to="/projects/html-css-sass">
                  html, css, sass
                </Link>
                <Link activeClassName='active' to="/projects/ruby-ruby-on-rails">
                  ruby, ruby-on-rails
                </Link>
                <Link activeClassName='active' to="/projects/javascript-angular">
                  javascript, angular
                </Link>
                <Link activeClassName='active' to="/projects/PostgreSQL-NATS">
                  PostgreSQL, NATS
                </Link>
              </li>
            </ul>
            <ul className="projects__list">
                {edges.map(project =>
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
);


export default Projects;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___technologies) {
        fieldValue
        totalCount
      }
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
`;