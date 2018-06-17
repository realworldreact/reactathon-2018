import styles from './speaker.module.css'
import React from 'react'
import MediaQuery from 'react-responsive'
import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import gitHubIcon from './github.svg'
import twitterIcon from './twitter.svg'

const Speaker = ({ name, company, twitter, github, imgSlug, width = 250 }) => {
  const primaryImgSrc = require(`../images/${imgSlug}@3x.png`)
  const secondaryImgSrc = require(`../images/${imgSlug}@3x-2.png`)

  return (
    <div style={{ textAlign: 'center', width, marginBottom: 50 }}>
      <Fade left>
        <div style={{ position: 'relative', height: 188 }}>
          <MediaQuery minDeviceWidth={1224}>
            <img
              src={secondaryImgSrc}
              alt={`${name}'s image`}
              className={styles['speaker-image']}
            />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
            {isMobile => (
              <img
                src={primaryImgSrc}
                alt={`${name}'s image`}
                className={classNames(styles['speaker-image'], {
                  [styles['primary-image']]: !isMobile,
                })}
              />
            )}
          </MediaQuery>
        </div>
      </Fade>
      <h2>{name}</h2>
      <h3 style={{ color: '#535353' }}>{company}</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <a href={twitter} style={{ width: 40 }} target="_blank">
          <img src={twitterIcon} alt="Twitter icon" style={{ width: 24 }} />
        </a>
        <a href={github} style={{ width: 40 }} target="_blank">
          <img src={gitHubIcon} alt="GitHub icon" style={{ width: 24 }} />
        </a>
      </div>
    </div>
  )
}

export default Speaker
