import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "./Header"
import styled from 'styled-components'
import ReviewForm from "./ReviewForm"

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
    background: #ccc;
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
        setHotel(res.data.data.attributes)
        setLoaded(true)
      })
      .catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    e.target.value
  }

  const handleSubmit = e => {
    e.preventDefault()

    const hotel_id = id
    
  }

  return (
    <Wrapper>
      {
        loaded && 
        <>
          <Column>
            <Main>
              
                <Header 
                  attributes={hotel}
                  reviews={hotel}
                />
              <div className="reviews"></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={hotel}
              review={review}
            />
          </Column>
        </>
      }
    </Wrapper>
  )
}

export default Hotel
