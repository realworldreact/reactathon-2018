import React from 'react'

const Conference = () => (
  <section id="conference" style={{ marginTop: 50, marginBottom: 30 }}>
    <h1 style={{ marginBottom: 30 }}>Your Neighborhood React Conference</h1>
    <p style={{ maxWidth: 610, marginLeft: 'auto', marginRight: 'auto' }}>
      This special edition of Reactathon features an evening + full day of technical talks in the heart
      of San Francisco on all things React. Come hang out with and learn from some of the
      brightest minds and best speakers in the JS/React community.
    </p>
    <p style={{ marginTop: 15 }}>
      Want to give a talk yourself? Our{' '}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc31T6Nr_xmYk5ACIqG7S8jmXpWKXpi9R-eFEXzYmL-8Xz4Ew/viewform?usp=sf_link"
        target="_blank"
      >
        CFP is open
      </a>{' '}
      until June 20.{' '}
    </p>
  </section>
)

export default Conference
