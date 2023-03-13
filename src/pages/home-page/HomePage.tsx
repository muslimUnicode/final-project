import React from 'react';
import CardsList from '../../components/CardsList/CardsList';
import ReviewsList from '../../components/Review/ReviewsList';
import './homePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <ReviewsList />
            <CardsList />
        </div>
    );
};

export default HomePage;