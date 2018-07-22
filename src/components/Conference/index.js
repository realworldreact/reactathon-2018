import React from 'react'
import Link from 'gatsby-link'

const Conference = () => (
  <section
    id="conference"
    className="container"
    style={{ marginTop: 50, marginBottom: 30 }}
  >
    <h1 style={{ marginBottom: 30 }}>Your Neighborhood React Conference</h1>
    <p style={{ maxWidth: 610, marginLeft: 'auto', marginRight: 'auto' }}>
      This special edition of Reactathon features an evening reception + full
      day of technical talks in the heart of San Francisco on all things React.
      Come hang out with and learn from some of the brightest minds and best
      speakers in the JS/React community, and join the workshops for more in-depth
      lessons.
    </p>
    <ul style={{ listStyleType: 'none', listStyle: 'none', marginRight: 'auto', marginLeft: 'auto', marginTop: 30 }}>
      <li style={{ display: 'inline', paddingRight: '20' }}><Link to="/schedule">Conference Schedule</Link></li>
      <li style={{ display: 'inline', paddingLeft: '20' }}><Link to="/workshops">Workshops Schedule</Link></li>
    </ul>
  </section>
)

export default Conference
