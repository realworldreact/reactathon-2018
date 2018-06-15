import React from 'react'
import MediaQuery from 'react-responsive'
import Conference from '../components/Conference'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'

import BuyTickets from '../components/BuyTickets'

const IndexPage = () => (
  <main style={{ textAlign: 'center', marginBottom: 100 }}>
    <Conference />
    <Speakers />
    <hr />
    <AdditionalEvents />
    <hr />
    <MediaQuery minDeviceWidth={1224}>
      <div>
        <Highlights />
        <hr />
      </div>
    </MediaQuery>
    <Sponsors />
    <hr />
    <BuyTickets />
  </main>
)

export default IndexPage
