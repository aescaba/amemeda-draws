import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About amemeda" />
    <h1>About</h1>
    <p>amemeda, or Amanda, is a developer and designer from the New York Metropolitan Area who likes to draw in her free time. 
      She discovered her love of traditional art at a young age, and continued to foster her skills throughout adolescence and adulthood, 
      most recently picking up digital art in 2020. Amanda enjoys branching out into other mediums and loves every aspect of the creative process. </p>

      {/* insert contact form here*/}
      <a href="https://www.instagram.com/amemedadraws/" target="_blank">instagram</a>
  </Layout>
)

export default About
