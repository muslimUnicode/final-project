import React from "react";
import pizza from "../../../assets/pizza.png";
import buy from "../../../assets/Buy.svg";

const CardItem = () => {
  return (
    <div className="card__item">
      <img src={pizza} alt="" />
      <div className="card__descr">
        <div className="card__title">
          <h3>Ягненок</h3>
          <p className="card__gram">Вес: 225 г</p>
        </div>
        <p className="card__description">
          Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком
        </p>
        <div className="card__price-btn">
          <h3>620 ₽</h3>
          <button>
            В корзину
            <img src={buy} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
