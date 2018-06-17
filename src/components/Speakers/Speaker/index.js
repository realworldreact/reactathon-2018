import styles from './speaker.module.css'
import React from 'react'

const Speaker = ({ name, company, twitter, github, imgSlug }) => {
  return (
    <div className={styles.speaker}>
      <div style={{ display: 'flex' }}>
        <img
          src={require(`../images/${imgSlug}@3x.png`)}
          alt={`${name}'s image`}
          className={styles['speaker-image']}
        />
        <div style={{ marginLeft: 40 }}>
          ksajdf
        </div>
      </div>
    </div>
  )
}

export default Speaker
