import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import whiteLogo from '../../assets/reactathon-logo-white.svg'

const Header = () => (
  <header className={styles.header}>
    <img src={whiteLogo} alt="Reactathon logo" className={styles.logo} />
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/conference">Conference</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/hackathon">Hackathon</Link>
      <Link to="/hiring-mixer">Hiring Mixer</Link>
    </nav>
  </header>
)

export default Header