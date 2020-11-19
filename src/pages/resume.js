import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ResizablePdf from "../components/resizable-pdf"
import { useStaticQuery, graphql } from "gatsby"

const ResumePage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            website
            linkedin
          }
        }
      }
    `
  )
  return (
  <Layout page="resume">
    <SEO title="Resume" />
    <div class="custom-row">
      <article class="home col-md-8 col-md-offset-2">
        <section>
          <h2 class="sub-heading">Resume</h2>
          <div class="resume">
            <a href="/assets/pdf/Jasmeet-Oberai-CV-condensed.pdf">Condensed PDF Resume Link</a>
            <br />
            <a href={"https://www.overleaf.com/docs?snip_uri=http://" + site.siteMetadata.website + "/assets/tex/resume.tex"}>
              Open LaTeX with Overleaf
            </a>
            <br />
            <a href={"http://ca.linkedin.com/in/" + site.siteMetadata.linkedin }>LinkedIn Profile</a>
            <br />
            <br />
            <ResizablePdf pdfUrl={"http://" + site.siteMetadata.website + "/assets/pdf/Jasmeet-Oberai-CV-condensed.pdf"} />
          </div>
        </section>
      </article>
    </div>
  </Layout>
  )
}

export default ResumePage
