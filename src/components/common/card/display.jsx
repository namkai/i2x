import React from 'react';
import StarRating from 'react-star-rating';
import './style.css';

const Card = ({ url, rating, language, final_script, duration, created }) => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">{final_script}</p>
      <StarRating name={url} size={18} totalStars={5} rating={rating} editing={false} />
      <audio controls>
        <source src={url} />
      </audio>
      <div className="card-meta">
        <div>{Math.floor(duration / 60)} minutes</div>
        <div>{created.split('T')[1].split('.')[0]}</div>
      </div>
    </div>
  </div>
);
export default Card;
