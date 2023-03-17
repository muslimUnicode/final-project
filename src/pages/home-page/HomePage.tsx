import React from 'react';
import CardsList from '../../components/CardsList/CardsList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ReviewsList from '../../components/Review/ReviewsList';
import './homePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <ReviewsList />
            <CardsList />
            <Footer />
        </div>
    );
};

export default HomePage;