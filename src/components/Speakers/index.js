import styles from './speakers.module.css'
import React, { Component } from 'react'
import Speaker from './Speaker'
import speakers from './speakers.json'

const Speakers = () => (
  <section className={styles.speakers} style={{ marginTop: 50 }}>
    <main>
      <h1 style={{ padding: 80 }}>Speakers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {speakers.map(({ name, company, twitter, github, imgSlug }, i) => (
          <Speaker
            key={`speaker-${i}`}
            name={name}
            company={company}
            twitter={twitter}
            github={github}
            imgSlug={imgSlug}
          />
        ))}
      </div>
    </main>
  </section>
)

export default Speakers
