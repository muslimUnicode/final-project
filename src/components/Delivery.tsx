import "./delivery.scss";
import AccordionItem from "./AccordionItem";
import map from "../assets/map.png";
import './accordeonItem.scss';
import {faqs} from '../db/dataInput'
import { useState } from "react";

const Delivery: React.FC = () => {

  const [clicked, setClicked] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    if (clicked === index) {
     return setClicked(null);
    }
    setClicked(index);
   };

  return (
    <div className="delivery">
      <h2>Условия доставки</h2>
      <div className="delivery__form">

        <ul className="form__input">
        {faqs.map((faq, index: number) => (
        <AccordionItem onToggle={() => handleToggle(index)} active={clicked === index} key={index} faq={faq} />
      ))}
        </ul>

        <img className="map" src={map} alt="" />
      </div>

      <div className="delivery__schedule">
        <div className="schedule__header">
          <div className="schedule__work">
            <h3>График работы доставки:</h3>
            <span>с 10:00-21:00</span>
          </div>
          <div className="schedule__work">
            <h3>График работы кафе:</h3>
            <span>с 08:00-21:00</span>
          </div>
        </div>
        <h3>Минимальный заказ:</h3>
        <p>
          Бесплатная доставка пешим курьером при сумме заказа от 400 ₽ Доставка
          оператором такси от любой суммы заказа - по тарифам перевозчика.
        </p>
      </div>
    </div>
  );
};

export default Delivery;
