import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Hotel from './Hotel'
import styled from 'styled-components'

const Home = styled.div`
  width: 100vw;
  overflow: hidden;
  
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

`

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
    <Home>
      <Header>
        <h1>OpenHotels</h1>
        <Subheader>Honest, Unbiased Hotels Reviews</Subheader>
      </Header>
      <Grid>
        <ul>{grid}</ul>
      </Grid>
    </Home>
  )
}

export default Hotels
