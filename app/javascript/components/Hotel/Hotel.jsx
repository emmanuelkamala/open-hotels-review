import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "./Header"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

`
const Column = styled.div`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`

const Hotel = (props) => {
  const [hotel, setHotel] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(()=> {
    const slug = props.match.params.slug
    const url = `/api/v1/hotels/${slug}`

    axios.get(url)
      .then(res => {
        setHotel(res.data)
        setLoaded(true)
        console.log(res.data.data);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Wrapper>
      <Column>
        <Main>
          {
            loaded && 
            <Header 
              attributes={hotel.data.attributes}
              reviews={hotel.included}
            />
          }
          <div className="reviews"></div>
        </Main>
      </Column>
      <Column>
        <div className="review-form">
          REview form
        </div>
      </Column>
    </Wrapper>
  )
}

export default Hotel
