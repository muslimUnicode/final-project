import './Cafe.scss';
import Header from '../../components/header/Header';
import CafeInfo from '../../components/cafe-info/CafeInfo';
import CafeMenu from '../../components/cafe-menu/CafeMenu';
import CafeOrders from '../../components/cafe-orders/CafeOrders';
import Profile from '../../components/profile/Profile';
import { useState } from 'react';

const Cafe = () => {

    const [content, setContent] = useState<number>(0);

    return (
        <div className='cafe'>
            <Header />
            <div className='cafe__content'>
                <Profile setContent={setContent} />
                {content === 0 && <CafeOrders /> ||
                content === 1 && <CafeMenu /> ||
                content === 2 && <CafeInfo />}
            </div>
        </div>
    );
};

export default Cafe;