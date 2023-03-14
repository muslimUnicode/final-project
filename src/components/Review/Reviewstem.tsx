import React from 'react';

type CardItemProps = {
  card: string;
};

const Reviewstem: React.FC<CardItemProps> = ({card}) => {

    return (
        <div className='review__item'>
          <img src={card} alt="" />
        </div>
    );
};


export default Reviewstem;