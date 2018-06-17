import styles from './speaker.module.css'
import React from 'react'
import xIcon from './icon-x.svg'
import triangleIcon from './icon-triangle.svg'
import squareIcon from './icon-square.svg'

const Speaker = ({ name, company, topic, imgSlug }) => {
  return (
    <div className={styles.speaker}>
      {imgSlug ? (
        <img
          src={require(`../images/${imgSlug}`)}
          alt={`${name}'s image`}
          className={styles['speaker-image']}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
      <div className={styles['info-container']}>
        <div className={styles['info-row']}>
          <div className={styles['icon-container']}>
            <img src={xIcon} alt="x icon" />
          </div>
          <p>{name}</p>
        </div>
        <div className={styles['info-row']}>
          <div className={styles['icon-container']}>
            <img src={triangleIcon} alt="triangle icon" />
          </div>
          <p>{company}</p>
        </div>
        <div className={styles['info-row']}>
          <div className={styles['icon-container']}>
            <img src={squareIcon} alt="square icon" />
          </div>
          <p>{topic}</p>
        </div>
      </div>
    </div>
  )
}

export default Speaker
