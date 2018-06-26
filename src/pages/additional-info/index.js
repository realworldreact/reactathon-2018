import styles from './additionalInfoPage.module.css'
import React, { Component } from 'react'
import { Link as ReactScrollLink } from 'react-scroll'
import BuyTickets from '../../components/BuyTickets'
import github1 from './images/github-1.png'
import github2 from './images/github-2.png'
import githubMap from './images/github-map.png'
import hotel1 from './images/hotel-1.png'
import hotel2 from './images/hotel-2.png'
import marriottMap from './images/marriott-map.png'
import friday1 from './images/friday-fun-1.png'
import friday2 from './images/friday-fun-2.png'
import friday3 from './images/friday-fun-3.png'

class AdditionalInfoPage extends Component {
  render() {
    return (
      <section className={`container ${styles['additional-info-page']}`}>
        <h1>Additional Info</h1>
        <nav>
          <ReactScrollLink to="venue" smooth>
            Venue
          </ReactScrollLink>
          <ReactScrollLink to="hotel" smooth>
            Hotel
          </ReactScrollLink>
          <ReactScrollLink to="friday" smooth>
            Friday Fun Day
          </ReactScrollLink>
        </nav>
        <article id="venue">
          <h2>Venue</h2>
          <div className={styles['img-grid']}>
            <img src={githubMap} alt="GitHub map" />
            <img src={github1} alt="GitHub crowd shot" />
            <img src={github2} alt="GitHub dining area shot" />
          </div>
          <h3>GitHub</h3>
          <a
            href="https://www.google.com/maps/place/88+Colin+P+Kelly+Jr+St,+San+Francisco,+CA+94107/@37.7822671,-122.3934419,17z/data=!3m1!4b1!4m5!3m4!1s0x80858077fe6ae953:0x1cf829f1248fb8f4!8m2!3d37.7822671!4d-122.3912479"
            target="_blank"
          >
            <p>88 Colin P Kelly Jr St</p>
            <p>San Francisco, CA 94107</p>
          </a>
        </article>
        <hr />
        <article id="hotel">
          <h2>Hotel</h2>
          <div className={styles['img-grid']}>
            <img src={marriottMap} alt="Marriott map" />
            <img src={hotel1} alt="Hotel outside shot" />
            <img src={hotel2} alt="Hotel room shot" />
          </div>
          <h3>Courtyard by Marriott Downtown San Francisco</h3>
          <a
            href="https://www.google.com/maps/place/299+2nd+St,+San+Francisco,+CA+94105/@37.7859285,-122.3987897,17z/data=!3m1!4b1!4m5!3m4!1s0x8085807c63c7f31b:0xea73a8eb630fb752!8m2!3d37.7859285!4d-122.3965957"
            target="_blank"
          >
            <p>299 2nd St</p>
            <p>San Francisco, CA 94105</p>
          </a>
          <div className={styles.description}>
            <p>
              This hotel is a 10 minute walk from the Montgomery St. BART
              (subway) station, and a 10 minute walk from GitHub.
            </p>
            <p>
              We have secured a preferred rate of $239 per night for conference
              attendees! Rooms are limited. Book a room from the following link
              or use code <strong>REACTATHON</strong>
            </p>
          </div>
          <a
            href="https://www.marriott.com/hotels/travel/sfocd-courtyard-san-francisco-downtown/"
            className="btn"
            target="_blank"
            style={{ margin: '30px auto' }}
          >
            Book Room
          </a>
        </article>
        <hr />
        <article id="friday">
          <h2>Friday Fun Day</h2>
          <div className={styles['img-grid']}>
            <img src={friday1} alt="In the woods stairs shot" />
            <img src={friday2} alt="City view shot" />
            <img src={friday3} alt="Outdoor restaurant seating shot" />
          </div>
          <h3>Guided walking tours & scavenger hunt</h3>
          <a
            href="https://www.google.com/maps/place/Ferry+Building,+One+San+Francisco+Bay+Trail,+San+Francisco,+CA+94111/@37.7955703,-122.3955148,17z/data=!3m1!4b1!4m5!3m4!1s0x808580668cd055bb:0x9cbbc099ec82aef7!8m2!3d37.7955703!4d-122.3933208"
            target="_blank"
          >
            <p>Ferry Building</p>
            <p>One Ferry Building</p>
            <p>San Francisco, CA 94111</p>
          </a>
          <div className={styles.description}>
            <p>
              Let us show you some of the attractions that San Francisco has to
              offer in this guided tour! We'll test your stamina by walking up
              some of the city's hidden staircases, passing by tucked-away
              gardens and breathtaking views of the city. Enjoy lunch in San
              Francisco's Little Italy, or "North Beach" as we call it, and
              then take a ride on the historic cable cars!
            </p>
            <p>
              Along the way, take photos of some famous landmarks and hidden
              sights to participate in the scavenger hunt to win prizes!
            </p>
            <p>
              Come hang out with us and make some new friends from 11:00am -
              3:30pm.
            </p>
          </div>
        </article>
        <hr />
        <BuyTickets />
      </section>
    )
  }
}

export default AdditionalInfoPage
