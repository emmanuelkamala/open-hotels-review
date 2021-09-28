import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const HotelLogo = styled.div`
  width: 200px;
  margin-top: 20px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin: 0 auto;
  }
`
const HotelName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background-color: #ccc;
    padding: 10px 50px;
    text-decoration: none;
  }
`

const Hotel = (props) => {
  return (
    <Card>
      <HotelLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </HotelLogo>
      <HotelName>
        {props.attributes.name}
      </HotelName>
      <div className="hotel-score">
        {props.attributes.avg_score}
      </div>
      <LinkWrapper>
        <Link to={`/hotels/${props.attributes.slug}`}> 
          View Hotel
        </Link>
      </LinkWrapper>
    </Card>
  )
}

export default Hotel
