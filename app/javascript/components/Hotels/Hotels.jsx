import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Hotel from './Hotel'

const Hotels = () => {
  const [hotels, setHotels] = useState([])
  
  useEffect(() => {
    axios.get('/api/v1/hotels.json')
    .then(res => setHotels(res.data.data))
    .catch(error => console.log(error))
  }, [hotels.length])

  const grid = hotels.map(item => (
    <Hotel
      key={item.attributes.name}
      attributes={item.attributes}
    />
  ))

  return (
    <div className="home">
      <div className="header">
        <h1>OpenHotels</h1>
        <div className="subheader">Honest, Unbiased Hotels Reviews</div>
      </div>
      <div className="grid">
        <ul>{grid}</ul>
      </div>
    </div>
  )
}

export default Hotels
