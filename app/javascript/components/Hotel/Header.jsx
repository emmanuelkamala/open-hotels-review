import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 10px 50px 0;
  font-size: 18px;

  img {
    height: 300px;
    width: 500px;
    object-fit: cover;
    border-radius: 3%;
    border: 1px solid rgba(0,0,0,0.1);
  }

`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding: 10px 0;
`

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes
  const total = props.reviews.length
  return (
    <Wrapper>
      <h1>{name}</h1>
      <img src={image_url} alt={name} />
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header
