import React from 'react'

const ReviewForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>Have an experience with {props.attributes.name}? Share your review...</div>
        <div className="field">
          <input 
            type="text" 
            name="title" 
            placeholder="Review title" 
            onChange={props.handleChange} 
            value={props.review.title} 
          />
        </div>
        <div className="field">
          <input 
            type="text" 
            name="description" 
            placeholder="Review description" 
            onChange={props.handleChange} 
            value={props.review.description} 
          />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">
              Rate this Hotel
            </div>
            Rating goes here
          </div>
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
