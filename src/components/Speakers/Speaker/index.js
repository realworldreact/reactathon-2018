import styles from './speaker.module.css'
import React from 'react'
import GitHubIcon from '../GitHubIcon'
import TwitterIcon from '../TwitterIcon'

const Speaker = ({ name, company, topic, imgSlug, twitter, github }) => (
  <div className={styles.speaker}>
    {imgSlug ? (
      <img
        src={require(`../../../assets/speakers/${imgSlug}`)}
        alt={`${name}'s image`}
        className={styles['speaker-image']}
      />
    ) : (
      <div className={styles.placeholder} />
    )}
    <div className={styles['info-container']}>
      <p className={styles['speaker-name']}>{name}</p>
      <p className={styles.company}>{company}</p>
      <p className={styles.topic}>{topic}</p>
      <div className={styles['social-media-container']}>
        <a href={twitter} target="_blank">
          <TwitterIcon />
        </a>
        <a href={github} target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  </div>
)

export default Speaker
