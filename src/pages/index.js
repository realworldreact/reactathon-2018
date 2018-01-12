import React from 'react'
import blackLogo from '../assets/reactathon-logo-black.svg'
import calendar1Icon from '../assets/icons/calendar-1@3x.png'
import calendar2Icon from '../assets/icons/calendar-2@3x.png'
import workshopsIcon from '../assets/icons/workshops-icon@3x.png'
import hackathonIcon from '../assets/icons/hackathon-icon@3x.png'
import hiringMixerIcon from '../assets/icons/hiring-mixer@3x.png'
import lyftLogo from '../assets/sponsors/lyft@3x.png'
import githubLogo from '../assets/sponsors/github@3x.png'
import netlifyLogo from '../assets/sponsors/netlify@3x.png'
import opentableLogo from '../assets/sponsors/opentable@3x.png'
import pinterestLogo from '../assets/sponsors/pinterest@3x.png'
import eventbriteLogo from '../assets/sponsors/eventbrite@3x.png'

const Conference = () => (
  <section id="conference" style={{ marginTop: 30, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 30 }}>Developer Conference</h1>
    <p style={{ width: 610, marginLeft: 'auto', marginRight: 'auto' }}>
      Reactathon is a 3-day dual-conference in the heart of San Francisco
      featureing some of the brightest minds in the JS/React community.
    </p>
    <p style={{ marginTop: 15 }}>You can attend one or both conferences:</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 630,
      }}
    >
      <div style={{ textAlign: 'center', width: 290 }}>
        <img
          src={calendar1Icon}
          alt="fundamentals calendar icon"
          className="icon"
        />
        <h1 style={{ marginBottom: 30 }}>Fundamentals</h1>
        <p>
          Over 15 talks filled with fundamentals, best practices, and contextual
          advice in a single-day, single-track conference
        </p>
      </div>
      <div style={{ textAlign: 'center', width: 290 }}>
        <img
          src={calendar2Icon}
          alt="advanced calendar icon"
          className="icon"
        />
        <h1 style={{ marginBottom: 30 }}>Advanced</h1>
        <p>
          Two full days of talks, mingling, and new friends built around the
          cutting-edge of web and mobile development
        </p>
      </div>
    </div>
  </section>
)

const Speakers = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 30 }}>Speakers</h1>
    <p>CFPs are now open.</p>
    <p style={{ marginTop: 15 }}>
      Talks for the Fundamentals conf are nearly full, but we are still
      accepting submissions.<br />
      Half of the spots for the 2-day Advanced conf are still available
    </p>
    <div
      style={{
        display: 'flex',
        margin: '15px auto',
        justifyContent: 'space-between',
        width: 200,
      }}
    >
      <a>Talks CFP</a>
      <a>Workshops CFP</a>
    </div>
    <p>Submission Deadline: January 29</p>
  </section>
)

const AdditionalEvents = () => (
  <section id="additional-events" style={{ marginTop: 50, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 50 }}>Additional Events</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: 220 }}>
        <img src={workshopsIcon} alt="workshops icon" className="icon" />
        <h1>Workshops</h1>
        <p>5 full-day workshops from industry leaders and core contributors</p>
      </div>
      <div style={{ width: 220 }}>
        <img src={hackathonIcon} alt="hackathon icon" className="icon" />
        <h1>Hackathon</h1>
        <p>
          2-day non-sleepover hackathon to learn, compete, and grow together
        </p>
      </div>
      <div style={{ width: 220 }}>
        <img src={hiringMixerIcon} alt="hiring mixer icon" className="icon" />
        <h1>Hiring Mixer</h1>
        <p>
          Meet the top companies in the SF Bay who use React and are looking for
          engineers like you
        </p>
      </div>
    </div>
  </section>
)

const Sponsors = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 30 }}>Sponsors</h1>
    <p style={{ width: 610, marginLeft: 'auto', marginRight: 'auto' }}>
      Join us during this exciting week of events and meet the brightest
      developers on the cutting edge of modern web and mobile development.
    </p>
    <a href="mailto:sponsors@reactathon.com?subject=Request for Sponsor Info">
      sponsors@reactathon.com
    </a>
    <p style={{ marginTop: 30 }}>Some of last year's sponsors</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
      }}
    >
      <img src={lyftLogo} alt="lyft logo" className="sponsor-logo" />
      <img src={githubLogo} alt="github logo" className="sponsor-logo" />
      <img src={netlifyLogo} alt="netflify logo" className="sponsor-logo" />
      <img src={opentableLogo} alt="opentable logo" className="sponsor-logo" />
      <img src={pinterestLogo} alt="pinterest logo" className="sponsor-logo" />
      <img
        src={eventbriteLogo}
        alt="eventbrite logo"
        className="sponsor-logo"
      />
    </div>
  </section>
)

const Tickets = () => (
  <section style={{ marginTop: 50, marginBottom: 100 }}>
    <h1 style={{ marginBottom: 30 }}>Tickets</h1>
    <p style={{ width: 580, marginLeft: 'auto', marginRight: 'auto' }}>
      For your best chance at getting tickets, get notified when they go on sale
      with our (non-spammy) newsletter.
    </p>
    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
      <input type="text" placeholder="Email" />
      <div className="btn" style={{ marginLeft: 10 }}>
        Sign Up
      </div>
    </div>
  </section>
)

const IndexPage = () => (
  <main style={{ textAlign: 'center', marginTop: 100 }}>
    <img src={blackLogo} alt="Reactathon logo" />
    <h1 style={{ marginTop: 30 }}>March 20-22, 2018</h1>
    <h2>San Francisco</h2>
    <Conference />
    <hr />
    <Speakers />
    <hr />
    <AdditionalEvents />
    <hr />
    <Sponsors />
    <hr />
    <Tickets />
  </main>
)

export default IndexPage
