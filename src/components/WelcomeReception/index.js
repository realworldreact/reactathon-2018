import styles from './welcomeReception.module.css'
import React, { Component } from 'react'
import a11y from './topic-table-a11y.png'
import graphql from './topic-table-graphql.png'
import d3 from './topic-table-d3.png'
import jenLuker from '../../assets/speakers/speaker-jen-luker.png'
import erinDoyle from '../../assets/speakers/speaker-erin.png'
import jonWong from '../../assets/speakers/speaker-jon.png'
import swizecTeller from '../../assets/speakers/speaker-swizec.png'
import evePorcello from '../../assets/speakers/speaker-eve.png'

const MAX_CHARS = 410

class Expert extends Component {
  state = {
    expanded: this.props.bio.length < MAX_CHARS,
  }

  handleFullBioLinkClick = e => {
    e.preventDefault()
    this.setState({ expanded: true })
  }

  renderAvatar() {
    return this.props.avatarSrc ? (
      <img
        src={this.props.avatarSrc}
        alt={`${this.props.name} avatar`}
        className={styles.avatar}
      />
    ) : (
      <div className={styles.placeholder} />
    )
  }

  renderBio() {
    return this.state.expanded ? (
      <p>{this.props.bio}</p>
    ) : (
      <div>
        <p>{`${this.props.bio.slice(0, MAX_CHARS)}...`}</p>
        <div style={{ textAlign: 'right' }}>
          <a href="#" onClick={this.handleFullBioLinkClick}>
            Click for full bio
          </a>
        </div>
      </div>
    )
  }

  render() {
    const { name } = this.props

    return (
      <div className={styles.expert}>
        <div className={styles['avatar-container']}>{this.renderAvatar()}</div>
        <p className={styles['expert-name']}>{name}</p>
        {this.renderBio()}
      </div>
    )
  }
}

const WelcomeReception = () => (
  <section className={`container ${styles['welcome-reception']}`}>
    <h1>Welcome Reception</h1>
    <div className={styles['description-container']}>
      <div className={styles.description}>
        <p>
          The conference starts on the evening of Sept 7 with a reception
          featuring food, drinks, and good company!
        </p>
        <p>
          You're welcome to casually socialize and make new friends, and also
          encouraged to learn something new at one of the moderated Topic
          Tables!
        </p>
      </div>
      <div className={styles['topic-table']}>
        <p style={{ fontWeight: 'bold', marginBottom: 0 }}>Topic Table</p>
        <p style={{ fontStyle: 'italic' }}>noun</p>
        <ol>
          <li>
            A gathering place where engineers test & expand their knowledge of a
            subject through discussion, moderated by experts.
          </li>
        </ol>
        <p style={{ fontStyle: 'italic', marginLeft: 12 }}>
          Sarah learned a lot about data visualizations with React & D3 by
          chatting with Swizec at the topic table.
        </p>
      </div>
    </div>
    <div className={styles['topic-container']}>
      <div>
        <img
          src={a11y}
          alt="a11y topic table icon"
          className={styles['topic-icon']}
        />
      </div>
      <Expert
        avatarSrc={jenLuker}
        name="Jen Luker"
        bio="Jen Luker is a Lead software engineer at Formidable, a BookBytes podcast co-host, and a member of the RxJS learning team. She has spent a majority of her decade-long career as a full-stack developer using PHP, Javascript, and CSS, but has a particular fondness for front end technologies. Jen trains others in ReactJS and accessibility, loves optimizing webpack builds, and codes apps in React Native. When she's not finding solutions, learning new technologies, or reading, her spare time is spent spinning yarn from raw wool and knitting; she's even been known to 3D print her own tools for the job. Jen is also fascinated by all things space, enjoys vintage cars, and is always looking for good conversation."
      />
      <Expert
        avatarSrc={erinDoyle}
        name="Erin Doyle"
        bio="Erin Doyle works as a full-stack Web Developer and Scrum Master at CashStar in Portland, Maine.  She loves all things JavaScript and has been deeply focused on React for the last 2+ years.  Her most notable OSS contributions include: react-a11y, react-dates, react-timezone, react-times, and react-redux-form.  Much of the last 1-2 years she has been working on creating an eCommerce web application that is not only WCAG compliant but an actual pleasant user experience for those with disabilities.  She now tries to be a local evangelist for accessibility and the accessible user experience.  She is also passionate about code quality and writing beautiful code, using a pragmatic approach to moving quickly and developing iteratively, continuous integration and deployment, and documentation and process improvement. As a native Floridian, she's still getting used to life in Maine with her husband and two boys.  In her free time (when she finds it on rare occasions!), she's a jack of all hobbies, master of none, which include but are not limited to: reading, movies, video games, knitting, crocheting, meditating, learning to play banjo, cooking, baking, mechanical keyboards, running, hiking, yoga, gardening, attendings lots of the kids' sporting events, loving her fur babies (cats and dogs), etc."
      />
    </div>
    <div className={styles['topic-container']}>
      <div>
        <img
          src={graphql}
          alt="GraphQL topic table icon"
          className={styles['topic-icon']}
        />
      </div>
      <Expert
        avatarSrc={evePorcello}
        name="Eve Porcello"
        bio="Eve Porcello is the co-owner of Moon Highway, a training and curriculum development company based in Northern California. She is an active corporate trainer, creates courses for LinkedIn Learning, and is the co-author of O'Reilly's Learning GraphQL and Learning React."
      />
      <Expert
        avatarSrc={jonWong}
        name="Jon Wong"
        bio="Jon is an engineer on the Frontend infrastructure team at Coursera where he works to help developers focus on the problem at hand: building a world-class learning experience! He's been using GraphQL for over a year and loves using it for every product he builds and is looking forward to share the joy of GraphQL with as many people as he can!"
      />
    </div>
    <div
      className={`${styles['topic-container']} ${
        styles['single-topic-speaker']
      }`}
    >
      <div>
        <img
          src={d3}
          alt="GraphQL topic table icon"
          className={styles['topic-icon']}
        />
      </div>
      <Expert
        avatarSrc={swizecTeller}
        name="Swizec Teller"
        bio="Hi I'm Swizec, a geek with a hat. Rumor has it my bird is more popular these days than my hat 🤔 I've made some books and courses on web development and working on more. Been doing JavaScript since before jQuery was cool and building my first React component back in 2015 blew my mind."
      />
    </div>
    <footer>
      <p>More topics and moderators to be announced!</p>
      <p>
        You can apply to be a moderator
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOCOjDoipxeqkbCr_nXH3lnskUL6lKV6PUDyjqsZ0wl1KRNA/viewform?usp=sf_link" target="_blank">
          {' '}
          here
        </a>.
      </p>
    </footer>
  </section>
)

export default WelcomeReception
