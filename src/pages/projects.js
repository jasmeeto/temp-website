import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout page="projects">
    <SEO title="Projects" />
    <div class="custom-row">
      <article class="page col-md-8 col-md-offset-2">
        <section>
          <h2 class="sub-heading">
            <i class="fa fa-plane fa-fw"></i>
            ItinPlanner
        </h2>
          <div>
            <ul class="proj-list">
              <li>
                <i class="fa fa-chevron-right"> </i>
                <span> Travel planning app created during fourth year as a design project</span>
               </li>
              <li>
                <i class="fa fa-chevron-right"></i>
                <span> Made using <b>django REST framework</b>, and <b>Android (Java/XML)</b>, with <b>BUCK</b> as the build system</span>
            </li>
            </ul>
            <p>
              Now available in the <a href="https://play.google.com/store/apps/details?id=com.jbap.itinplanner">Play Store</a>
            </p>
          </div>

          <h2 class="sub-heading">
            <i class="fa fa-pencil fa-fw"></i>
          Sketch Server
        </h2>
          <div>
            <ul class="proj-list">
              <li>
                <i class="fa fa-chevron-right"></i>
                <span> A real-time multi user sketch pad made using <b>Node.js</b>, <b>Backbone.js</b>, <b>Omni.js</b>, <b>HTML5</b>, and <b>CSS3</b></span>
              </li>
            </ul>
            <p>
              Check it out code and demo on <a href="http://git.io/tuKCsQ">GitHub</a>
            </p>
          </div>


          <h2 class="sub-heading">
            <i class="fa fa-lightbulb-o fa-fw"></i>
          ideaHub
        </h2>
          <div>
            <ul class="proj-list">
              <li>
                <i class="fa fa-chevron-right"></i>
                <span> ideaHub is a web app that allows budding entrepreneurs to share ideas, look for resources, and execute.</span></li>
              <li>
                <i class="fa fa-chevron-right"></i>
            <span> Made using <b>Node.js</b>, <b>MongoDB</b>, <b>Jade/HTML5</b>, <b>CSS3</b> and <b>jQuery</b></span>
              </li>
            </ul>
            <p>
              Check it out on <a href="http://git.io/fAlPBA">GitHub</a>
            </p>
          </div>


          <h2 class="sub-heading">
            <i class="fa fa-cloud fa-fw"></i>
          Goose Pursuit
        </h2>
          <div>
            <ul class="proj-list">
              <li>
                <i class="fa fa-chevron-right"></i>
            <span> 2D <b>Android</b> game created with <b>libgdx</b> based on the classic game Duck Hunt.</span>
            </li>
            </ul>
            <p>
              Available on the <a href="https://play.google.com/store/apps/details?id=com.me.goosehunter">Play Store</a>
            </p>
          </div>

          <h2 class="sub-heading">
            <i class="fa fa-circle fa-fw"></i>
          Pong Game
        </h2>
          <div>
            <ul class="proj-list">
              <li>
                <i class="fa fa-chevron-right"></i>
            <span> A remake of another classic, Pong. Made using the <b>C++</b> Allegro library v4</span>
            </li>
            </ul>
            <p>
              Check it out on <a href="http://git.io/fJNSdw">GitHub</a>
            </p>
          </div>
        </section>
      </article>
    </div>
  </Layout>
)

export default ProjectsPage

