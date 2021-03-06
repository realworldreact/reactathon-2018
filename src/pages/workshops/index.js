import React from 'react'
import RegisterNowCallToAction from '../../components/RegisterNowCallToAction'
import WorkshopCard from './WorkshopCard'
import createUniverseTicketWidget from '../../components/UniverseTicketWidget/createUniverseTicketWidget'
import workshops from './workshops.json'

const Index = () => (
  <div style={{ marginTop: 100, marginBottom: 100, textAlign: 'center' }}>
    <h1>Workshops</h1>
    <h3 style={{ color: '#535353', marginTop: 20, marginBottom: 50 }}>
      September 7
    </h3>
    <div style={{ marginBottom: 50 }}>
      <RegisterNowCallToAction
        descriptionParagraphs={[
          'We’ve assembled a team of top engineers who build with the technologies they’re teaching every day. From core-contributors and senior engineers well-known on the conference and workshop circuit, you’ll learn in hours what they’ve have mastered over years.',
        ]}
        callToAction="Register for each workshop separately"
        showButton={false}
      />
    </div>
    <div
      style={{
        maxWidth: 880,
        margin: 'auto',
      }}
    >
      {workshops.map(
        (
          {
            title,
            skillLevel,
            photo,
            instructor,
            position,
            company,
            prerequisites,
            descriptions,
            time,
            length,
            ticketWidgetId,
          },
          i
        ) => {
          const UniverseTicketWidget = createUniverseTicketWidget(
            ticketWidgetId
          )

          return (
            <div key={`workshop-${i}`} style={{ margin: '50px 0 ' }}>
              <WorkshopCard
                title={title}
                skillLevel={skillLevel}
                photo={photo}
                instructor={instructor}
                position={position}
                company={company}
                prerequisites={prerequisites}
                descriptions={descriptions}
                time={time}
                length={length}
              />
              <div style={{ margin: '50px 0' }}>
                <UniverseTicketWidget />
              </div>
              {i + 1 !== workshops.length && <hr />}
            </div>
          )
        }
      )}
    </div>
  </div>
)

export default Index
