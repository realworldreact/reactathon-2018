import React, { Component } from 'react'

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
        style={{ marginTop: 100, marginBottom: 50 }}
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
          <a href="http://jsconf.com/codeofconduct.html" target="_blank">
            Code of Conduct
          </a>.
        </p>
      </section>
    )
  }
}

export default Highlights
