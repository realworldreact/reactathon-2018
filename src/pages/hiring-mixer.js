import React from 'react'
import RegisterNowCallToAction from '../components/RegisterNowCallToAction'
import Register from '../components/Register'

const HiringMixer = () => (
  <div style={{ marginTop: 60, marginBottom: 100, textAlign: 'center' }}>
    <h1>Hiring Mixer</h1>
    <h3 style={{ color: '#535353', marginTop: 20, marginBottom: 50 }}>
      Friday, March 23
    </h3>
    <div style={{ marginBottom: 50 }}>
      <RegisterNowCallToAction
        title="SAN FRANCISCO’S TOP COMPANIES + YOU"
        descriptionParagraphs={[
          'Come and mingle with some of the SF Bay’s hottest companies and startups including Eventbrite, Sony Interactive Entertainment, and many more.',
          'Can’t make the in-person hiring mixer? Don’t want to reveal at you’re looking around? Sign up for the Remote Hiring Mixer below, and choose which companies can see your profile before we send it to them.',
        ]}
        callToAction="Register for each workshop separately."
      />
    </div>
    <hr />
    <div style={{ marginTop: 50 }}>
      <Register />
    </div>
  </div>
)

export default HiringMixer
