import React from 'react'
import Fade from 'react-reveal/Fade'
import classNames from 'classnames'
import styles from './buttonLink.module.css'

const ButtonLink = ({ inverse, fadeIn = false, url, children }) => {
  const body = (
    <div className={classNames({ [styles.inverse]: inverse })}>
      <a href={url} className={styles.btn} target="_blank">
        {children}
      </a>
    </div>
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
