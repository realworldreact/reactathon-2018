import React from 'react'
import BuyTicketsButton from '../BuyTicketsButton'

const RegisterNow = ({ title, descriptionParagraphs, callToAction }) => (
  <div style={{ margin: 'auto', textAlign: 'left', maxWidth: 850 }}>
    <h1 style={{ marginBottom: 15 }}>{title}</h1>
    <div style={{ display: 'flex' }}>
      <div style={{ width: 420 }}>
        {descriptionParagraphs.map((paragraph, i) => (
          <p
            key={`paragraph-${i}`}
            style={{
              marginBottom: i + 1 === descriptionParagraphs.length ? 0 : 15,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div
        style={{
          marginLeft: '15%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ marginBottom: 15 }}>
          <BuyTicketsButton text="Register Now" inverse />
        </div>
        <p>{callToAction}</p>
      </div>
    </div>
  </div>
)

export default RegisterNow
