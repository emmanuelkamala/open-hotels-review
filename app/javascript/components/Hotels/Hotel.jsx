import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background-color: #fff;
`

const HotelLogo = styled.div`

`

const Hotel = (props) => {
  return (
    <div className="card">
      <div className="hotel-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="hotel-name">
        {props.attributes.name}
      </div>
      <div className="hotel-score">
        {props.attributes.avg_score}
      </div>
      <div className="hotel-link">
        <Link to={`/hotels/${props.attributes.slug}`}> 
          View Hotel
        </Link>
      </div>
    </div>
  )
}

export default Hotel
