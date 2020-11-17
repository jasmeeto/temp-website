import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title;
  const subtitle = `${post.frontmatter.date}`;

    return (
        <Layout siteTitle={title} siteSubtitle={subtitle}>
            <SEO
                title={title}
                description={post.frontmatter.description || post.excerpt}
            />
            <div class="custom-row">
                <article class="page col-md-8 col-md-offset-2">
                    <section>
                        <h2 class="sub-heading">{title}</h2>
                        <p class="meta">{subtitle}</p>

                        <div class="post">
                            <div dangerouslySetInnerHTML={{ __html: post.html }} />
                        </div>
                        <a class="back" href="/"><i class="fa fa-arrow-circle-left"></i>Back to Home</a>
                    </section>
                </article>
            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
      fields {
        slug
      }
    }
  }
`