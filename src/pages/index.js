import React from "react"
import Helmet from "react-helmet"
import { Icon, Button, Tooltip } from "antd"
import "antd/dist/antd.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link
        href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css"
        rel="stylesheet"
      />
    </Helmet>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div style={{ maxWidth: `300px`, margin: `2rem auto 1.45rem` }}>
      <Image />
    </div>
    <h1>Jacob Herper</h1>
    <p>Front End Web Developer</p>
    <p>
      <Icon type="environment" theme="filled" /> London, UK
    </p>

    <div style={{ marginTop: `2rem` }}>
      <a
        href="https://www.linkedin.com/in/jacobherper/"
        style={{ margin: `0 0.5rem` }}
      >
        <Tooltip placement="top" title="Find me on LinkedIn">
          <Icon type="linkedin" theme="filled" style={{ fontSize: 48 }} />
        </Tooltip>
      </a>
      <a href="https://github.com/jakeherp" style={{ margin: `0 0.5rem` }}>
        <Tooltip placement="top" title="See what I built on Github">
          <Icon type="github" theme="filled" style={{ fontSize: 48 }} />
        </Tooltip>
      </a>
      <a href="https://behance.net/jakeherp" style={{ margin: `0 0.5rem` }}>
        <Tooltip placement="top" title="See what I built on Behance">
          <Icon type="behance-square" theme="filled" style={{ fontSize: 48 }} />
        </Tooltip>
      </a>
      <a href="https://instagram.com/jakeherp" style={{ margin: `0 0.5rem` }}>
        <Tooltip placement="top" title="Follow me on Instagram">
          <Icon type="instagram" theme="filled" style={{ fontSize: 48 }} />
        </Tooltip>
      </a>
    </div>
    <div style={{ marginTop: `1rem` }}>
      <Button href="https://herper.io/contact/" size="large">
        Get in touch
      </Button>
    </div>
  </Layout>
)

export default IndexPage
