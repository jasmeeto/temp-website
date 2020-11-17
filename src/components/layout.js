/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Head from "./head"
import "./layout.css"

const Layout = ({ children }) => {
  return (
      // <Header siteTitle={data.site.siteMetadata.title} />
      <div class="site">
        <Head />
        <header class="menu">
          <nav class="grid">
              <ul class="custom-row">
                  <li class="col-md-3 "><a href="/">Home</a></li>
                  <li class="col-md-3 "><a href="/projects/">Projects</a></li>
                  <li class="col-md-3 "><a href="/resume/">Resume</a></li>
                  <li class="col-md-3 "><a href="/connect/">Connect</a></li>
              </ul>
          </nav>
        </header>
        
        <div class="main-grid">
          { children }
        </div>

        <footer class="copyright">
            <div class="grid">
                <div class="custom-row">
                    <p class="col-md-8 col-md-offset-2"> &copy; Jasmeet Oberai 2020. This site is served by Gatsby and is hosted on <a href="https://github.com/{{site.github}}/{{site.github}}.github.io">GitHub</a> </p>
                </div>
            </div>
        </footer>

      </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
