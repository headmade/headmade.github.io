import React from "react";
import Helmet from 'react-helmet'

// Components
import Link from "gatsby-link";
import projectImagePath from "../utils/projectImagePath";

const Tags = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <main className="myMain">
      <Helmet title="projects" />
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
                </li>
                <li className="filters-item">
                  <Link activeClassName='active' to="/projects/ruby-ruby-on-rails">
                    ruby, ruby-on-rails
                  </Link>
                </li>
                <li className="filters-item">
                  <Link activeClassName='active' to="/projects/javascript">
                    javascript
                  </Link>
                </li>
                <li className="filters-item">
                  <Link activeClassName='active' to="/projects/angular">
                    angular
                  </Link>
                </li>
                <li className="filters-item">
                  <Link activeClassName='active' to="/projects/react">
                    react
                  </Link>
                </li>
                <li className="filters-item">
                  <Link activeClassName='active' to="/projects/postgres">
                    postgres
                  </Link>
                </li>
                <li className="filters-item">
                  <Link to="/projects">
                    Все
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
                              <img src={projectImagePath(project.node.frontmatter.desktopImg, project.node.frontmatter.path, "desktop")} alt={project.node.frontmatter.title}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns large-6 small-12">
                      <div className="info">
                        <h3 className="info__caption">{project.node.frontmatter.title}</h3>
                        <p className="info__text">{project.node.frontmatter.description}</p>
                        <h3 className="item__caption">Технологии</h3>
                        <ul className="info__list">
                          {project.node.frontmatter.technologies.map((technology, index) => {
                            return (
                              <li key={index} className="info__item">
                                <span>{technology}</span>
                              </li>
                            )
                          })}
                        </ul>
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
};

// Tags.propTypes = {
//   pathContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               path: PropTypes.string.isRequired,
//               title: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// };

export default Tags;

export const pageQuery = graphql`
  query TagPage($technology: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___order], order: DESC }
      filter: { frontmatter: { technologies: { in: [$technology] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            order
            title
            description
            desktopImg
            technologies
          }
        }
      }
    }
  }
`;