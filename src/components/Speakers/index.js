import styles from './speakers.module.css'
import React, { Component } from 'react'
import Speaker from './Speaker'
import speakers from './speakers.json'
import frontendHappyHourSpeakers from './frontendHappyHourSpeakers.json'
import fehhLogo from './images/fehh@3x.png'

const Speakers = () => (
  <section className={styles.speakers} style={{ marginTop: 50 }}>
    <main>
      <h1 style={{ padding: 80 }}>Speakers</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
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
      <div>
        <h1 style={{ marginBottom: 15 }}>Bonus:</h1>
        <h2 style={{ marginBottom: 50 }}>
          Special Live Recording of the Front-end Happy Hour Podcast
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 50,
          }}
        >
          <img
            src={fehhLogo}
            alt="Front End Happy Hour logo"
            style={{ height: 161 }}
          />
        </div>
        <h1 style={{ marginBottom: 30 }}>Featuring</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {frontendHappyHourSpeakers.map(
            ({ name, company, twitter, github, imgSlug }, i) => (
              <Speaker
                key={`fehh-speaker-${i}`}
                name={name}
                company={company}
                twitter={twitter}
                github={github}
                imgSlug={imgSlug}
                width={200}
              />
            )
          )}
        </div>
      </div>
      <h3>See the full schedule and topics here:</h3>
      <h2>
        <a href="/conference">Conference Schedule</a>
      </h2>
      <h1 style={{ marginTop: 50, marginBottom: 30 }}>Your Conference MC</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Speaker
          name="Brian Douglas"
          company="Netlify"
          twitter="https://twitter.com/bdougieYO"
          github="https://github.com/bdougie"
          imgSlug="brian-douglas"
        />
      </div>
    </main>
  </section>
)

export default Speakers
