import React, { Component } from 'react';
import CardItem from './CardItem/CardItem';
import './cards.scss';

class CardsList extends Component {
    render() {
        return (
           <div className='cards'>
            <h2>Пиццы</h2>
             <div className='cards__list'>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
           </div>
        );
    }
}

export default CardsList;