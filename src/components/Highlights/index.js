import React, { Component } from 'react'
import Link from 'gatsby-link'

class Highlights extends Component {
  state = {
    loadedImages: {},
  }

  componentDidMount() {
    const imageLoadDelay = 3000
    function loadImages() {
      Array.from(new Array(13), (x, i) => i + 1).map(x => {
        const img = new Image()

        img.onload = () => {
          this.setState({
            loadedImages: { ...this.state.loadedImages, [x]: true },
          })
        }

        img.src = require(`./images/highlights-${x}@2x.png`)
      })
    }

    setTimeout(loadImages.bind(this), imageLoadDelay)
  }

  render() {
    return (
      <section
        className="container"
        style={{ marginTop: 100, marginBottom: 50, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}
      >
        <h1>March 2018 Highlights</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >
          {Array.from(new Array(13), (x, i) => i + 1).map(x => (
            <div key={`highlight-${x}`} style={{ flexBasis: 300 }}>
              {this.state.loadedImages[x] ? (
                <img
                  src={require(`./images/highlights-${x}@2x.png`)}
                  alt="highlight image"
                  className="img-responsive"
                  style={{
                    border: '4px solid white',
                  }}
                />
              ) : (
                <div style={{ width: 300, height: 200 }} />
              )}
            </div>
          ))}
        </div>
        <p style={{ marginTop: 50 }}>
          Interested in group discounts or sponsorships? Contact{' '}
          <a href="mailto:sponsors@reactathon.com?subject=Sponsorship Inquiry">
            sponsors@reactathon.com
          </a>.
        </p>
        <p style={{ marginTop: 15 }}>
          Real World React is committed to an inclusive and harassment-free
          atmosphere. Please review our{' '}
          <Link to="/code-of-conduct">Code of Conduct</Link>.
        </p>
        <p style={{ marginTop: 15 }}>
          If you would like to be considered for our ticket lottery, please submit an application <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZMR73AHlsXsEb5kPbK79IrpzB9WV7EOSU_MuNOE9er-f9qA/viewform?usp=sf_link" target="_blank">here</a>.
        </p>
      </section>
    )
  }
}

export default Highlights
