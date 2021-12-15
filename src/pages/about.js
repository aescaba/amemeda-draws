import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About amemeda" />
    <h1>About me</h1>
    <p>this is where my about me goes</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default About
