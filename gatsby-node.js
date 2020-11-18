/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slug = require(`slug`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
  
    // Add extra fields to markdown nodes
    if (node.internal.type === `MarkdownRemark`) {
      const filename = createFilePath({ node, getNode, basePath: `blog`})
  
      // Blog files must have format name YYYY-MM-DD-title.md
      if (node.frontmatter.layout === 'post') {
        const match = filename.match(/^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/)
        if (match) {
          const [, date, title] = match
          if (!date || !title) {
            console.error(`Invalid filename ${filename}. Change name to start with a valid date and title`)
          } else {
            createNodeField({
              node,
              name: `slug`,
              value: `/blog/${slug(date, "/")}/${title}`
            })
          }
        }
      }
    }
}  

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  
    await graphql(
      `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              },
              frontmatter {
                layout
              }
            }
          }
        }
      }
      `
    ).then(result => {
      if(result.errors) {
        return Promise.reject(result.errors)
      }
  
      const markdownItems = result.data.allMarkdownRemark.edges
  
      // Create blog post pages
      markdownItems.forEach(({ node }) => {
        if (node.frontmatter.layout === 'post') {  
          createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: node.fields.slug,
            },
          })
        }
      })
    })
  }