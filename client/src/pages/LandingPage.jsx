import React from 'react'
import IconButton from '../components/IconButton'

import { faTicket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <h1>Connecting programmers with clients faster than ever.</h1>
      <div className='register-cta'>
        <h4>If you're a company, startup, or individual looking to be connected with programming talent fast</h4>
        <IconButton
          icon={faMagnifyingGlass}
          text={'Find a developer now'}
          onClick={() => {
            console.log('redirect to company registration')
          }}
        />
        <div className='divider'></div>
        <h4>If you're a developer looking to find steady work while networking</h4>
        <IconButton
          icon={faTicket}
          text={'Start taking tickets today'}
          onClick={() => {
            console.log('redirect to developer registration')
          }}
        />
      </div>
    </div>
  )
}

export default LandingPage