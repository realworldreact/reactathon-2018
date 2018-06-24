import styles from './additionalInfo.module.css'
import React from 'react'
import Link from 'gatsby-link'
import github from './github-octocat.png'
import marriott from './courtyard-marriott.png'
import cableCar from './cable-car.png'
import workshops from './workshops-image.png'

const Item = ({ heading, subheading, img, copy, url = '/additional-info' }) => (
  <article>
    <h2>{heading}</h2>
    <main>
      {img}
      <div className={styles['item-description']}>
        <h3>{subheading}</h3>
        <p>{copy}</p>
        <div className={styles['button-container']}>
          <Link to={url} className="btn">
            Learn More
          </Link>
        </div>
      </div>
    </main>
  </article>
)

const AdditionalInfo = () => (
  <section className={`container ${styles['additional-info']}`}>
    <h1 style={{ marginBottom: 50 }}>Additional Info</h1>
    <main>
      <Item
        heading="Venue"
        subheading="GitHub"
        img={<img src={github} alt="GitHub octocat" />}
        copy="The conference is held at GitHub's beautiful downtown headquarters!
          Come join us for plenty of great talks, lots of food, & ample
          opportunity to socialize and network!"
      />
      <Item
        heading="Hotel"
        subheading="Courtyard by Marriott"
        img={<img src={marriott} alt="Courtyard by Marriott" />}
        copy="A 10-minute walk from both GitHub and the Montgomery St. BART (subway) station, this comfortable hotel is the perfect fit. Be sure to use our conference code to secure special rates."
      />
      <Item
        heading="Social"
        subheading="Friday Fun Day"
        img={<img src={cableCar} alt="SF cable car" />}
        copy="Join us on Friday afternoon for fun social activities! Ride the cable cars, climb the city's secret steps for some amazing views, and enjoy lunch with some new friends!"
      />
      <Item
        heading="Workshops"
        subheading="New Workshops"
        img={<img src={workshops} alt="Workshops" />}
        copy="Want to get more in depth on a subject? We're offering a number of technical workshops from leaders in the industry."
        url="/workshops"
      />
    </main>
  </section>
)

export default AdditionalInfo
