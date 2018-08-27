import styles from './jobsPage.module.css'
import React from 'react'
import BuyTickets from '../../components/BuyTickets'
import jobs from './jobs.json'

const JobsPage = () => (
  <section className={styles['jobs-page']}>
    <h1 style={{ marginBottom: 50 }}>Jobs</h1>
    <main>
      <h2 style={{ marginBottom: 50 }}>
        Please take the time to read our code of conduct.
      </h2>
      {jobs.map(({ title, description, fullDescriptionURL }, i) => (
        <div key={`job-${i}`} style={{ marginBottom: 30 }}>
          <h3 style={{ marginBottom: 15 }}>{title}</h3>
          <p style={{ marginBottom: 15 }}>{description}</p>
          <a href={fullDescriptionURL} target="_blank">
            See full job description
          </a>
        </div>
      ))}
    </main>
    <hr />
    <BuyTickets />
  </section>
)

export default JobsPage
