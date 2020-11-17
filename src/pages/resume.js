import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = () => (
  <Layout title="Jasmeet Oberai">
    <SEO title="Resume" />
    <div class="custom-row">
      <article class="home col-md-8 col-md-offset-2">
        <section>
          <h2 class="sub-heading">Resume</h2>
          <div class="resume">
            <a href="/assets/pdf/Jasmeet-Oberai-CV-condensed.pdf">Condensed PDF Resume Link</a>
            <br />
            <a href="https://www.overleaf.com/docs?snip_uri=http://{{ site.website }}/assets/tex/resume.tex">Open LaTeX with Overleaf</a>
            <br />
            <a href="http://ca.linkedin.com/in/{{ site.linkedin }}/">LinkedIn Profile</a>
            <br />
            <br />
            <iframe id="pdf-resume" src="http://docs.google.com/gview?url=http://{{ site.website }}/assets/pdf/Jasmeet-Oberai-CV-condensed.pdf&embedded=true" style={{width:'100%'}} frameborder="0"></iframe>
          </div>
        </section>
      </article>
    </div>
  </Layout>
)

export default ResumePage


