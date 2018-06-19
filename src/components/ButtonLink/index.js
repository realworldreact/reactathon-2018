import React from 'react'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade'

const ButtonLink = ({ fadeIn = false, url, children }) => {
  const body = (
    <Link to={url} className="btn" target="_blank">
      {children}
    </Link>
  )

  return fadeIn ? (
    <Fade delay={1500} bottom>
      {body}
    </Fade>
  ) : (
    body
  )
}

export default ButtonLink
