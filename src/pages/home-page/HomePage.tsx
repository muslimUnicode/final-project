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
            <TopCafes />
            <Categories />
            <Footer />
        </div>
    );
};

export default HomePage;