import axios from "axios"
import React, { useEffect, useState } from "react"

const Hotel = (props) => {
  const [hotel, setHotel] = useState({})
  const [review, setReview] = useState({})

  useEffect(()=> {
    const slug = props.match.params.slug
    const url = `/api/v1/hotels/${slug}`

    axios.get(url)
      .then(res => setHotel(res.data.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="wrapper">
      <div className="column">
        <div className="header"></div>
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">
          REview form
        </div>
      </div>
    </div>
  )
}

export default Hotel
