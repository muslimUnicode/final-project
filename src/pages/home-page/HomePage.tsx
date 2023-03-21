<<<<<<< HEAD
import React from 'react';
import CardsList from '../../components/CardsList/CardsList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ReviewsList from '../../components/Review/ReviewsList';
import './homePage.scss';
=======
import { useEffect } from 'react';
import Categories from '../../components/categories/Categories';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TopCafes from '../../components/top-cafes/TopCafes';
import { useAppDispatch } from '../../hooks/hooks';
import { getCafes } from '../../store/reducers/cafes/cafesAction';
import { getCategories } from '../../store/reducers/categories/categoriesAction';
import { getFood } from '../../store/reducers/foods/foodsAction';
import './HomePage.scss';
>>>>>>> 1013ed6137d030631e2f441650b9d674ad38c685

const HomePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getFood())
        dispatch(getCafes())
    }, [])

    return (
        <div className='homepage'>
            <Header />
<<<<<<< HEAD
            <ReviewsList />
            <CardsList />
=======
            <TopCafes />
            <Categories />
>>>>>>> 1013ed6137d030631e2f441650b9d674ad38c685
            <Footer />
        </div>
    );
};

export default HomePage;