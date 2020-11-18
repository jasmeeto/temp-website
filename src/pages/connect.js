import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const ConnectPage = ( {location} ) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            github
            twitter
            linkedin
            facebook
            email
          }
        }
      }
    `
  )

  return (
  <Layout page="connect">
    <SEO title="Connect" />
    <div class="custom-row">
      <article class="home col-md-6 col-md-offset-2">
        <section>
          <h2 class="sub-heading">Info</h2>
          <div class="contact">
            <p>
              Jasmeet Singh Oberai,<br />
          Software Developer,<br />
          University of Waterloo
        </p>
          </div>
        </section>
        <section>
          <h2 class="sub-heading">Connect</h2>
          <div class="social">
            <ul>
              <li><a href={'https://github.com/' + site.siteMetadata.github}><i class="fa fa-github-alt fa-fw"></i> GitHub</a></li>
              <li><a href={'http://ca.linkedin.com/in/' + site.siteMetadata.linkedin}><i class="fa fa-linkedin fa-fw"></i> LinkedIn</a></li>
              <li><a href={'https://twitter.com/' + site.siteMetadata.twitter}><i class="fa fa-twitter fa-fw"></i> Twitter</a></li>
              <li><a href={'https://facebook.com/' + site.siteMetadata.facebook}><i class="fa fa-facebook fa-fw"></i>  Facebook</a></li>
              <li><a href={'mailto:' + site.siteMetadata.email}><i class="fa fa-envelope fa-fw"></i>  Mail</a></li>
            </ul>
          </div>

        </section>
      </article>
    </div>
  </Layout>
  )
}

export default ConnectPage

