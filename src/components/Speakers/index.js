import styles from './speakers.module.css'
import React, { Component } from 'react'
import Speaker from './Speaker'
import speakers from './speakers.json'

const Speakers = () => (
  <section className={styles.speakers} style={{ marginTop: 60 }}>
    <main>
      <h1 style={{ padding: 80 }}>Speakers</h1>
      <div className={styles['speaker-cards-container']}>
        {speakers.map(({ name, company, topic, imgSlug }) => (
          <Speaker
            key={`${name}`}
            name={name}
            company={company}
            topic={topic}
            imgSlug={imgSlug}
          />
        ))}
      </div>
      <div className={styles['mc-container']}>
        <Speaker
          name="Brian Douglas"
          company="Github"
          topic="Master of Ceremonies"
          imgSlug="speaker-brian-douglas.png"
        />
      </div>
      <a href="#">full schedule of talks</a>
    </main>
  </section>
)

export default Speakers
