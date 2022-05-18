import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({ icon, text }) => {
  return (
    <button
      className='icon-btn'
      onClick={() => {
        console.log('icon button clicked: ', text)
      }}
    >
      <FontAwesomeIcon icon={icon} />
      <p className='icon-btn-text'>{text}</p>
    </button>
  )
}

export default IconButton