import React from 'react'
import MediaQuery from 'react-responsive'
import Conference from '../components/Conference'
import Speakers from '../components/Speakers'
import AdditionalInfo from '../components/AdditionalInfo'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'

import BuyTickets from '../components/BuyTickets'

const IndexPage = () => (
  <main style={{ textAlign: 'center', marginBottom: 100 }}>
    <Conference />
    <Speakers />
    <AdditionalInfo />
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
