import React from 'react';
import Rating from 'react-rating';
import './style.css';

const Card = ({ url, rating, language, final_script, duration, created }) => (
  <div className="card">
    <div className="card-block">
      <Rating
        empty={<i className="fa fa-star-o" aria-hidden="true" />}
        full={<i style={{color: 'gold'}} className="fa fa-star" aria-hidden="true" />}
        start={0}
        stop={5}
        initialRate={rating}
        readonly
      />
      <p className="card-text">{final_script}</p>
      <audio controls>
        <source src={url} />
      </audio>
      <div className="card-meta">
        <div>{Math.floor(duration / 60)} minutes</div>
        <div>created: {created.split('T')[1].split('.')[0]}</div>
      </div>
    </div>
  </div>
);
export default Card;
