import React from 'react'
import Link from 'gatsby-link'
import styles from './smallHeader.module.css'
import logo from '../../assets/sm-reactathon-logo.svg'

const SmallHeader = () => (
  <header className={styles.header}>
    <img
      src={logo}
      alt="Reactathon logo"
      className={styles.logo}
      style={{ width: 154 }}
    />
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/#buy-tickets">Buy Tickets</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/additional-info#venue">Venue</Link>
      <Link to="/additional-info#friday">Friday Fun Day</Link>
      <Link to="/jobs">Jobs</Link>
    </nav>
  </header>
)

export default SmallHeader
