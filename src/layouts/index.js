import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import BuildInfo from '../components/BuildInfo'
import GithubCorner from '../components/GithubCorner'

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Static Hacker News clone' },
        {
          name: 'keywords',
          content: 'hacker news, static site, gatsby, hackernews, clone',
        },
      ]}
    />
    <Header
      siteTitle={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      metadata={data.buildMetadata}
    />
    <GithubCorner />
    <Body>{children()}</Body>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    buildMetadata {
      buildDate
    }
  }
`
