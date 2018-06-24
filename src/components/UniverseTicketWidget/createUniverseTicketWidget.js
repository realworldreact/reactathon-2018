import React, { Component } from 'react'
import Spinner from 'react-spinkit'

export default function createUniverseTicketWidget(targetId) {
  return class UniverseTicketWidget extends Component {
    componentDidMount() {
      const script = document.createElement('script')

      script.src = 'https://www.universe.com/embed2.js'
      script.setAttribute('data-widget-type', 'universe-ticket')
      script.setAttribute('data-target-type', 'Listing')
      script.setAttribute('data-target-id', targetId)
      script.setAttribute(
        'data-state',
        'buttonColor=#000000&buttonText=Get Tickets'
      )

      this.el.appendChild(script)
    }

    render() {
      return (
        <div
          style={{
            maxWidth: 650,
            minHeight: 270,
            margin: 'auto',
            position: 'relative',
          }}
        >
          <div
            ref={el => (this.el = el)}
            style={{ position: 'relative', zIndex: 1 }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
            <Spinner name="ball-clip-rotate-multiple" fadeIn="none" />
          </div>
        </div>
      )
    }
  }
}
