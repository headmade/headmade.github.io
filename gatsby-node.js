/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const _ = require('lodash')
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectsTemplate = path.resolve(`src/templates/projectTemplate.js`);
  const projectFiltersTemplate = path.resolve("src/templates/projectFiltersTemplate.js");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              technologies
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const projects = result.data.allMarkdownRemark.edges;

    // Create post detail pages
    projects.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectsTemplate,
      });
    });

    // Tag pages:
    let technologies = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(projects, edge => {
      if (_.get(edge, "node.frontmatter.technologies")) {
        technologies = technologies.concat(edge.node.frontmatter.technologies);
      }
    });
    // Eliminate duplicate tags
    technologies = _.uniq(technologies);

    // Make tag pages
    technologies.forEach(technology => {
      createPage({
        path: `/projects/${_.kebabCase(technology)}/`,
        component: projectFiltersTemplate,
        context: {
          technology,
        },
      });
    });
  });
};