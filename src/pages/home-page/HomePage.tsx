import { useEffect } from 'react';
import Categories from '../../components/categories/Categories';
import Footer from '../../components/footer/Footer';
import ReviewsList from '../../components/Review/ReviewsList';
import { useAppDispatch } from '../../hooks/hooks';
import { getCategories } from '../../store/reducers/categories/categoriesAction';
import { getFood } from '../../store/reducers/foods/foodsAction';
import './HomePage.scss';

const HomePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getFood())
    }, [])

    return (
        <div className='homepage'>
            <ReviewsList />
            <Categories />
            <Footer />
        </div>
    );
};

export default HomePage;