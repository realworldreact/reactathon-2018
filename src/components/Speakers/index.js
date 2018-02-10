import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import speakers from './speakers.json'
import gitHubIcon from './github.svg'
import twitterIcon from './twitter.svg'

class Speaker extends Component {
  state = {
    hovered: false,
  }

  render() {
    const { name, company, twitter, github, imgSlug } = this.props
    const primaryImgSrc = require(`./images/${imgSlug}@3x.png`)
    const secondaryImgSrc = require(`./images/${imgSlug}@3x-2.png`)

    return (
      <div style={{ textAlign: 'center', width: 250, marginBottom: 50 }}>
        <Fade left>
          <div
            onMouseOver={() => this.setState({ hovered: true })}
            onMouseOut={() => this.setState({ hovered: false })}
          >
            <img
              src={this.state.hovered ? secondaryImgSrc : primaryImgSrc}
              alt={`${name}'s image`}
              style={{ width: 180 }}
            />
          </div>
        </Fade>
        <h2>{name}</h2>
        <h3 style={{ color: '#535353' }}>{company}</h3>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}
        >
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
}

const Speakers = () => (
  <section style={{ marginTop: 50 }}>
    <h1 style={{ marginBottom: 50 }}>Speakers</h1>
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
  </section>
)

export default Speakers
