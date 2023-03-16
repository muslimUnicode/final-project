import React from 'react';
import CardsList from '../../components/CardsList/CardsList';
import Footer from '../../components/Footer';
import ReviewsList from '../../components/Review/ReviewsList';
import './homePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <ReviewsList />
            <CardsList />
            <Footer />
        </div>
    );
};

export default HomePage;