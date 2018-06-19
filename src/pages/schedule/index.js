import styles from './schedulePage.module.css'
import React, { Component } from 'react'
import { Link as ReactScrollLink } from 'react-scroll'
import Link from 'gatsby-link'
import queryString from 'query-string'
import classNames from 'classnames'
import BuyTickets from '../../components/BuyTickets'
import ConvinceYourBoss from '../../components/ConvinceYourBoss'

class SchedulePage extends Component {
  render() {
    const { location } = this.props
    const { date = 'sept7' } = queryString.parse(location.search)

    return (
      <section className={`container ${styles['schedule-page']}`}>
        <h1>Schedule</h1>
        <div style={{ margin: 'auto', marginTop: 25, marginBottom: 60 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              to="?date=sept7"
              className={classNames(styles.tab, {
                [styles.active]: date === 'sept7',
              })}
            >
              Sept 7
            </Link>
            <Link
              to="?date=sept8"
              className={classNames(styles.tab, {
                [styles.active]: date === 'sept8',
              })}
            >
              Sept 8
            </Link>
          </div>
        </div>
        <div className={styles['tab-content-container']}>
          <main>
            <div className={styles.description}>
              <h2 style={{ marginBottom: 15 }}>Full Schedule Coming Soon</h2>
              <p style={{ marginBottom: 15 }}>
                We are putting the finishing touches on the conference schedule!
                Check back soon :)
              </p>
            </div>
            <div className={styles['buy-tickets-container']}>
              <div>
                <div style={{ marginBottom: 20 }}>
                  <ReactScrollLink to="buy-tickets" className="btn" smooth>
                    Buy Tickets
                  </ReactScrollLink>
                </div>
                <ConvinceYourBoss />
              </div>
            </div>
          </main>
        </div>
        <hr />
        <BuyTickets />
      </section>
    )
  }
}

export default SchedulePage
