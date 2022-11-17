import React from 'react';
import ReactStars from 'react-rating-stars-component';
import profilePhoto from '../../images/Profile.png';

const ReviewCard = ({review}) => {

    const options = {
        edit : false,
        color : "var(--color-bg)",
        activeColor : "tomato",
        size : window.innerWidth < 600 ? 20 : 25,
        value : review.rating,
        isHalf : true
    }
  return (
    <div className='reviewCard'>
        <img src={profilePhoto} alt="user" />
        <p>{review.name}</p>
        <ReactStars {...options}/>
        <span>{review.comment}</span>
    </div>
  )
}

export default ReviewCard