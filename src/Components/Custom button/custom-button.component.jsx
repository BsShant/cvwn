import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton({children}) {
  return (
    <div className='customButton'>
         <button className='myButton' type='submit'>{children}</button>
    </div>
  )
}
