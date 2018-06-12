import React from 'react'
import Fade from 'react-reveal/Fade'
import calendar1Icon from '../../assets/icons/calendar-1@3x.png'
import calendar2Icon from '../../assets/icons/calendar-2@3x.png'

const Conference = () => (
  <section id="conference" style={{ marginTop: 50, marginBottom: 30 }}>
    <h1 style={{ marginBottom: 30 }}>Your Neighborhood React Conference</h1>
    <p style={{ maxWidth: 610, marginLeft: 'auto', marginRight: 'auto' }}>
      Reactathon features an evening + full day of technical talks in the heart
      of San Francisco on all things React. Come learn from some of the
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
    <p style={{ marginTop: 15 }}>
      Interested in group discounts or sponsorships? Contact{' '}
      <a href="mailto:sponsors@reactathon.com?subject=Sponsorship Inquiry">
        sponsors@reactathon.com
      </a>.
    </p>
  </section>
)

export default Conference
