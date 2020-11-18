import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout title="Jasmeet Oberai">
    <SEO title="Home" />
    <div class="custom-row">
    <article class="home col-md-8 col-md-offset-2">
        <section>
            <h2 class="sub-heading">Welcome</h2>
            <div class="about">
                <p>Hello, and welcome to jasinobe. This site is a one stop location to learn everything there is about me, Jasmeet Oberai.</p>
                <p>
                  I am a Software Engineer graduating (June 2016) from the University of Waterloo. I'm passionate about creating. Whether it be through software, or music, or even any other art, I try to push my thoughts and creativity as far they can go.
                </p>
                <p>
                    I'm a huge advocate of agile development. Whether it be test driven development (TDD) or code review, I like finding the bugs just as much as I like squashing them. I also have a great fascination with puzzles and problem-solving. Finding the solution to a complex software problem, to me, is like intense detective work. I find much enjoyment in the piecing together the clues to get to a final outcome.
                </p>
                <p>
                   That being said, I'm not a total bore that just codes all day. Music is one of my other big passions. I enjoy music in any shape or form whether it be rap, rock, or country. But most of all, I enjoy Indian classical music. I play the instrument known as a Tabla which is an Indian drum that is played with the hands.
                </p>
                <p>
                    When I'm not found coding or playing tabla, I can be found playing basketball, soccer and even cricket on the odd occasion.
                </p>
            </div>
        </section>
        <section>
            <h2 class="sub-heading">Archive</h2>
        </section>
      </article>
    </div>
  </Layout>
)

export default IndexPage