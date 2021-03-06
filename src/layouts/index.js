import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BigHeader from '../components/BigHeader'
import SmallHeader from '../components/SmallHeader'
import Footer from '../components/Footer'
import './index.css'
import favIcon from './favicon.ico'

const TemplateWrapper = ({ children, location }) => {
  const isRootPage = location.pathname === '/'

  return (
    <div>
      <Helmet
        title="Reactathon 2018"
        meta={[
          {
            name: 'description',
            content:
              'This special edition of Reactathon features an evening + full day of technical talks in the heart of San Francisco on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.',
          },
          {
            name: 'keywords',
            content:
              'react, reactjs, react.js, react conf, conference, conf, workshop, netlify, github, eventbrite, webpack, redux, workshop, docker, learn to code, learn to program, learn react, san francisco, reactathon, learn programming, learn javascript, learn coding, code, coding, programming, software engineer, software developer, web development, development, engineering, coding bootcamp, javascript, open source',
          },
          {
            content: 'Reactathon',
            property: 'og:site_name',
          },
          {
            content: 'on',
            name: 'twitter:widgets:csp',
          },
          {
            content: 'https://www.reactathon.com',
            property: 'og:url',
          },
          {
            content:
              'This special edition of Reactathon features an evening + full day of technical talks in the heart of San Francisco on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.',
            property: 'og:description',
          },
          {
            content:
              'https://s3-us-west-1.amazonaws.com/reactathon-2018/reactathon-og-image.png',
            property: 'og:image',
          },
          {
            content: 'article',
            property: 'og:type',
          },
          {
            content: 'https://www.facebook.com/realworldreact',
            property: 'article:publisher',
          },
          {
            content: '@reactathon',
            name: 'twitter:creator',
          },
          {
            content: 'https://www.reactathon.com',
            name: 'twitter:url',
          },
          {
            content: '@reactathon',
            name: 'twitter:site',
          },
          {
            content: 'summary_large_image',
            name: 'twitter:card',
          },
          {
            content:
              'https://s3-us-west-1.amazonaws.com/reactathon-2018/reactathon-twitter-card.png',
            name: 'twitter:image:src',
          },
          {
            content: 'Reactathon: Sept 7 -8, 2018',
            name: 'twitter:title',
          },
        ]}
        link={[{ rel: 'icon', href: favIcon }]}
      />
      {isRootPage ? <BigHeader /> : <SmallHeader />}
      <div style={{ margin: '0 auto', paddingTop: 0 }}>{children()}</div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
