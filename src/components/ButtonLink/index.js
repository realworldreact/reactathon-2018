import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './buttonLink.module.css'

const ButtonLink = ({ fadeIn = false, url, children }) => {
  const body = (
    <a href={url} className={styles.btn} target="_blank">
      {children}
    </a>
  )

  return fadeIn ? (
    <Fade delay={1500} bottom>
      {body}
    </Fade>
  ) : (
    body
  )
}

export default ButtonLink
