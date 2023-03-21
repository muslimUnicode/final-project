import './Cafe.scss';
import Header from '../../components/header/Header';
import CafeInfo from '../../components/cafe-info/CafeInfo';
import CafeMenu from '../../components/cafe-menu/CafeMenu';
import CafeOrders from '../../components/cafe-orders/CafeOrders';
import Profile from '../../components/profile/Profile';

const Cafe = () => {
    return (
        <div className='cafe'>
            <Header />
            <div className='cafe__content'>
                <Profile />
                <CafeOrders />
                <CafeMenu /> 
                <CafeInfo />
            </div>
        </div>
    );
};

export default Cafe;