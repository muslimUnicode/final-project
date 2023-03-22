import { Link } from "react-router-dom"
import backArrow from "../../assets/back-arrow.svg"
import "./Ordering.scss"

const Ordering = () => {
    return(
        <div className="ordering">
            <div className="wrapper">
                <div className="upper-block">
                    <Link to="/basket" className="back-to-basket">
                        <img src={backArrow} alt="" />
                        <span>в корзину</span>
                    </Link>
                    <div className="about-ordering">
                        <div className="stick"></div>
                        <span className="ordering-word">Оформление заказа</span>
                    </div>
                </div>
                <div className="form-blocks">
                    <div className="block-1">
                        <div className="block-name">1. Контактная информация</div>
                        <div className="inputs">
                            <input type="text" placeholder="Имя*"/>
                            <input type="text" placeholder="Телефон*"/>
                        </div>
                    </div>
                    <div className="block-2">
                        <div className="block-name">2. Доставка</div>
                    </div>
                    <div className="block-3">
                        <div className="block-name">3. Оплатить</div>
                        <div className="payment-types">
                            <div className="payment-type type-1">
                                <input id="payment-radio-1" type="radio" name="payment-radio" defaultChecked />
                                <label htmlFor="payment-radio-1">Оплата онлайн</label>
                            </div>
                            
                            <div className="payment-type type-2">
                                <input id="payment-radio-2" type="radio" name="payment-radio" />
                                <label htmlFor="payment-radio-2">Курьеру картой</label>
                            </div>
                            
                            <div className="payment-type type-3">
                                <input id="payment-radio-3" type="radio" name="payment-radio" />
                                <label htmlFor="payment-radio-3">Наличными</label>
                            </div>
                        </div>
                        <div className="cash-back">Сдача с</div>
                    </div>
                    <div className="block-4">
                        <div className="block-name">4. Когда доставить</div>
                        <div className="delivery-time">
                            <div className="radio-buttons">
                                <div className="select-time type-1">
                                    <input id="delivery-radio-1" type="radio" name="delivery-radio" defaultChecked />
                                    <label htmlFor="delivery-radio-1">В ближайшее время</label>
                                </div>
                                <div className="select-time type-2">
                                    <input id="delivery-radio-2" type="radio" name="delivery-radio" />
                                    <label htmlFor="delivery-radio-2">Ко времени</label>
                                </div>
                            </div>
                            <div className="choose-time">Укажите время</div>
                        </div>
                        <div className="person-count">
                            <span>Кол-во персон</span>
                            <span className="counter">- 1 +</span>
                        </div>
                        <div className="want-you-us-to-call">Хотите мы позвоним?</div>
                        <div className="do-not-call">
                            <input id="do-not-call-radio" type="radio" name="call-radio" />
                            <label htmlFor="do-not-call-radio">Не перезванивать</label>
                        </div>
                        <div className="do-call">
                            <input id="do-call-radio" type="radio" name="call-radio" />
                            <label htmlFor="do-call-radio">Потребуется звонок оператора</label>
                        </div>
                    </div>
                    <div className="personal-data">
                        <input type="checkbox" />
                        <div className="text">
                            <span>Я согласен на обработку моих перс. данных в соответствии с </span>
                            <Link to="" className="link">Условиями</Link>
                        </div>
                        <button>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ordering