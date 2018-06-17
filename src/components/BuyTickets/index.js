import React, { Component } from 'react'
import styles from './index.module.css'
import { BUY_TICKETS_ID } from '../../constants'

const BuyTickets = () => (
  <section
    id={BUY_TICKETS_ID}
    className={styles['component-container']}
    style={{ marginTop: 50 }}
  >
    <h1>Buy Tickets</h1>
    <div style={{ marginTop: 30 }}>
      <p>Super Early Bird Tickets now on sale at Eventbrite</p>
    </div>
  </section>
)

export default BuyTickets
