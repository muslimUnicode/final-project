import React, { useState } from "react";
import CardItem from "./Reviewstem";
import { Card } from "../../dbCard";
import './reviews.scss';

const ReviewsList = () => {
  const [slice, setSlice] = useState(4);

  const handleClick = () => {
    setSlice(slice + 4);
  };

  return (
    <div className="reviews">
      <h2>Топ заведений по отзывам</h2>
      <div className="reviews__list">
        {Card.map((card: any) => <CardItem card={card} />).slice(0, slice)}
        <button onClick={handleClick}>Показать больше</button>
      </div>
    </div>
  );
};

export default ReviewsList;
