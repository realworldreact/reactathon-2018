import React from 'react'
import styles from './sponsors.module.css'
import githubLogo from './github@2x.png'
import microsoftLogo from './microsoft@2x.png'
import netlifyLogo from './netlify@3x.png'
import flexportLogo from './flexport@3x.svg'
import gustoLogo from './gusto-logo.jpg'
import instacartLogo from './instacart.png'
import typeformLogo from './typeform.png'

const SponsorImage = ({ name, url, imgSrc, style }) => (
  <a href={url} target="_blank">
    <img
      src={imgSrc}
      alt={`${name} logo`}
      className={styles['sponsor-logo']}
      style={style}
    />
  </a>
)

const Sponsors = () => (
  <section
    style={{
      marginTop: 50,
      marginBottom: 50,
      maxWidth: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <h1 style={{ marginBottom: 50 }}>Sponsors</h1>
    <div style={{ marginBottom: 25 }}>
      <SponsorImage
        name="GitHub"
        url="https://www.github.com/about/careers/"
        imgSrc={githubLogo}
        style={{
          height: 60,
          padding: '4px 0',
          margin: '25px 50px',
        }}
      />
    </div>
    <div style={{ marginBottom: 25 }}>
      <SponsorImage
        name="Gusto"
        url="https://gusto.com/about/careers"
        imgSrc={gustoLogo}
        style={{ height: 50, margin: '20px 40px 18px' }}
      />
      <SponsorImage
        name="Netlify"
        url="https://www.netlify.com/careers/"
        imgSrc={netlifyLogo}
        style={{
          height: 55,
          margin: '25px 50px 15px',
        }}
      />
      <SponsorImage
        name="Flexport"
        url="https://www.flexport.com/careers"
        imgSrc={flexportLogo}
        style={{
          height: 26,
          margin: '30px 50px',
        }}
      />
      <SponsorImage
        name="Instacart"
        url="https://careers.instacart.com/"
        imgSrc={instacartLogo}
        style={{
          height: 35,
          marginBottom: '28px',
        }}
      />
      <SponsorImage
        name="Microsoft"
        url="https://careers.microsoft.com"
        imgSrc={microsoftLogo}
        style={{
          height: 35,
          marginBottom: '28px',
        }}
      />
      <SponsorImage
        name="Typeform"
        url="https://www.typeform.com/careers/"
        imgSrc={typeformLogo}
        style={{
          height: 90,
          marginBottom: '0px',
        }}
      />
    </div>
  </section>
)

export default Sponsors
