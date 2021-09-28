import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Hotels = () => {
  const [hotels, setHotels] = useState([])
  
  useEffect(() => {
    axios.get('/api/v1/hotels.json')
    .then(res => setHotels(res.data.data))
    .catch(error => console.log(error))
  }, [hotels.length])

  const list = hotels.map(item => (
    <li key={item.attributes.name}>{item.attributes.name}</li>
  ))

  return (
    <ul>
      {list}
    </ul>
  )
}

export default Hotels
