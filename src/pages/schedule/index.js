import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './schedulePage.module.css'
import Schedule from '../../components/Schedule'
import dayOneSchedule from './day-one-schedule.json'
import dayTwoSchedule from './day-two-schedule.json'
import Location from '../../components/Location'
import BuyTickets from '../../components/BuyTickets'
import ConvinceYourBoss from '../../components/ConvinceYourBoss'
import { Link as ReactScrollLink } from 'react-scroll'
import Link from 'gatsby-link'
import qs from 'querystringify'

class SchedulePage extends Component {
  constructor() {
    super()

    this.state = { activeTab: 1 }
  }

  handleTabClick(e, tabNum) {
    e.preventDefault()
    this.setState({ activeTab: tabNum })
  }

  renderActiveTabContent(activeTab) {
    const buyTicketsSection = (
      <div>
        <div style={{ width: 166, marginBottom: 15 }}>
          <ReactScrollLink to="buy-tickets" className="btn" smooth>
            Buy Tickets
          </ReactScrollLink>
        </div>
        <p style={{ marginBottom: 20 }}>Seating is limited.</p>
      </div>
    )
    const advancedDay = (
      <div>
        <h1 style={{ marginBottom: 15 }}>SESSIONS</h1>
        <main>
          <div className={styles.description}>
            <p style={{ marginBottom: 15 }}>
              We've curated a full day of talks on some of the hottest topics of
              the year. Come learn from and mingle with many of the leading
              experts in the JS/React community.
            </p>
            <p style={{ marginBottom: 15 }}>
              Come for the talks, stay for the afterparty!
            </p>
            <p style={{ marginBottom: 15 }}>Location:</p>
            <a
              style={{ textDecoration: 'underline' }}
              href="https://www.google.com/maps/place/GitHub/@37.7822713,-122.3934366,17z/data=!3m1!4b1!4m5!3m4!1s0x8085807f619a62df:0x491ce2f73977af35!8m2!3d37.7822671!4d-122.3912479"
              target="_blank"
            >
              <p style={{ color: 'blue' }}>GitHub</p>
              <p style={{ color: 'blue' }}>88 Colin P Kelly Jr St</p>
              <p style={{ color: 'blue' }}>San Francisco, CA 94107</p>
            </a>
          </div>
          <div className={styles['buy-tickets-container']}>
            {buyTicketsSection}
            <ConvinceYourBoss />
          </div>
        </main>
      </div>
    )

    if (activeTab === 1) {
      return (
        <div>
          <h1 style={{ marginBottom: 15 }}>Welcome Reception</h1>
          <main>
            <div className={styles.description}>
              <p style={{ marginBottom: 15 }}>
                We are kicking off the conference with a welcome reception full
                of food, drinks, conversation, and of course, education!
              </p>
              <p style={{ marginBottom: 15 }}>
                The Topic Tables make it easy for you to identify the
                conversations that you want to be a part of. You can be sure to
                learn something new from one of our expert moderators.
              </p>
              <p style={{ marginBottom: 15 }}>Location:</p>
              <a
                style={{ textDecoration: 'underline' }}
                href="https://www.google.com/maps/place/Microsoft+Reactor/@37.7846235,-122.3982283,15z/data=!4m2!3m1!1s0x0:0x97838fa44b46f66a?sa=X&ved=0ahUKEwjZ_5TZxrncAhWpxVQKHSbjDlYQ_BII1QEwHA"
                target="_blank"
              >
                <p style={{ color: 'blue' }}>Microsoft Reactor</p>
                <p style={{ color: 'blue' }}>680 Folsom St. #145</p>
                <p style={{ color: 'blue' }}>San Francisco, CA 94107</p>
              </a>
            </div>
            <div className={styles['buy-tickets-container']}>
              {buyTicketsSection}
              <ConvinceYourBoss />
            </div>
          </main>
          <Schedule date="SEPTEMBER 7" schedule={dayOneSchedule} />
        </div>
      )
    } else if (activeTab === 2) {
      return (
        <div>
          {advancedDay}
          <Schedule date="SEPTEMBER 8" schedule={dayTwoSchedule} />
        </div>
      )
    }
  }

  render() {
    const { activeTab } = this.state

    return (
      <section style={{ marginTop: 60, marginBottom: 60, textAlign: 'center' }}>
        <h1>Conference</h1>
        <div style={{ margin: 'auto', marginTop: 20, marginBottom: 50 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {[1, 2].map(tabNum => (
              <div key={`day-${tabNum}`}>
                <a
                  href="#"
                  className={classNames(styles.tab, {
                    [styles.active]: activeTab === tabNum,
                  })}
                  onClick={e => this.handleTabClick(e, tabNum)}
                >
                  Day {tabNum}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['tab-content-container']}>
          {this.renderActiveTabContent(activeTab)}
        </div>
        <hr />
        <BuyTickets />
      </section>
    )
  }
}

export default SchedulePage
