import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h2 className='logo'>Logos</h2>
            <input type='search' placeholder='Введите адрес доставки'/>
            <div className="telefon">
                <img src="" alt="" />
                <p>Контакты:</p>
                <span>+7 (917) 510-57-59</span>
            </div>
            <div className='profil'>
                <img src="" alt="" />
                <button>Войти</button>
            </div>
            <button>Корзина<span>4</span></button>
        </div>
    );
};

export default Header;