import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () =>
{
  const notification = useSelector(state => state.notification)

  if (!notification.message)
  {
    return (
      <div className="error" style={{color: 'white'}}>
        {'\n'}
      </div>
    )
  }

  var color = notification.isSuccess ? 'green' : 'red'
  return (
    <div className="error" style={{color: color}}>
      {notification.message}
    </div>
  )
}

export default Notification