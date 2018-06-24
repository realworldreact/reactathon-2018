import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './buyTickets.module.css'
import createUniverseTicketWidget from '../UniverseTicketWidget/createUniverseTicketWidget'
import { BUY_TICKETS_ID, ROUND_ONE_TICKET_WIDGET_ID } from '../../constants'

const RoundOneUniversteTicketWidget = createUniverseTicketWidget(
  ROUND_ONE_TICKET_WIDGET_ID
)

class BuyTickets extends Component {
  constructor() {
    super()

    this.state = { activeTab: 1 }
  }

  handleTabClick(e, tabNum) {
    e.preventDefault()
    this.setState({ activeTab: tabNum })
  }

  renderActiveTabContent(activeTab) {
    if (activeTab === 1) {
      return <RoundOneUniversteTicketWidget />
    } else if (activeTab === 2) {
      return <p>Round 2 tickets not on sale yet.</p>
    } else if (activeTab === 3) {
      return <p>Round 3 tickets not on sale yet.</p>
    }
  }

  render() {
    const { activeTab } = this.state

    return (
      <section
        id={BUY_TICKETS_ID}
        className={styles['buy-tickets']}
        style={{ marginTop: 50 }}
      >
        <h1>Buy Tickets</h1>
        <div style={{ margin: 'auto', marginTop: 20, marginBottom: 50 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {[1, 2, 3].map(tabNum => (
              <div key={`round-${tabNum}`}>
                <a
                  href="#"
                  className={classNames(styles.tab, {
                    [styles.active]: activeTab === tabNum,
                  })}
                  onClick={e => this.handleTabClick(e, tabNum)}
                >
                  Round {tabNum}
                </a>
              </div>
            ))}
          </div>
        </div>
        {this.renderActiveTabContent(activeTab)}
      </section>
    )
  }
}

export default BuyTickets
