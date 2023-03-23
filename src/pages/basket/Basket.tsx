import "./Basket.scss"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"
import backArrow from "../../assets/back-arrow.svg"
import deleteIcon from "../../assets/delete-dish.svg"
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import Footer from "../../components/footer/Footer"
import { useDispatch } from "react-redux"
import { decreaseCountDishReducer, deleteDishReducer, increaseCountDishReducer } from "../../store/reducers/basket/basketSlice"
import Header from "../../components/header/Header"

const Basket = () => {
    const basket = useAppSelector(state => state.basket.dishes)
    const dispatch = useDispatch()

    const increaseDish = (_id: string) => {
        dispatch(increaseCountDishReducer(_id))
    }

    const decreaseDish = (_id: string) => {
        dispatch(decreaseCountDishReducer(_id))
    }

    const deleteDish = (_id: string) => {
        dispatch(deleteDishReducer(_id))
    }

    return(
        <div className="basket">
            <Header />
            <div className="wrapper">
                <div className="upper-block">
                    <Link to="/" className="back-to-dishes">
                        <img src={backArrow} alt="" />
                        <span>к выбору блюда</span>
                    </Link>
                    <div className="about-basket">
                        <div className="stick"></div>
                        <span className="basket-word">КОРЗИНА</span>
                        <span className="basket-number">(в корзине 3 товара)</span>
                    </div>
                </div>
                <div className="order">
                    {basket.map((dish, index) => (
                        <div className="dish" key={dish._id}>
                            <img src={dish.image} alt="" className="dish-image" />
                            <div className="about-dish">
                                <div className="dish-name">{dish.name}</div>
                                <div className="dish-info">{dish.info}</div>
                            </div>
                            <div className="dish-number">
                                <img src={minus} alt="" onClick={() => decreaseDish(dish._id)} />
                                <span>{dish.count}</span>
                                <img src={plus} alt="" onClick={() => increaseDish(dish._id)} />
                            </div>
                            <div className="dish-price">{dish.price} ₽</div>
                            <img src={deleteIcon} alt="" className="delete-dish" onClick={() => deleteDish(dish._id)} />
                            {index !== 0 && <div className="hr"></div>}
                        </div>
                    ))}
                </div>
                <div className="total-block">
                    <div className="info">
                        <div className="total">
                            <span>Итого: <span className="total-number">{basket.reduce((total, dish) => total + dish.price * dish.count, 0)} ₽</span></span>
                        </div>
                        <div className="free-delivery">
                            <span>До бесплатной доставки не хватет: <span className="green">100 ₽</span></span>
                        </div>
                        <div className="min-price">
                            <span>Минимальная сума заказа 1500 ₽</span>
                        </div>
                    </div>
                    <Link to="/ordering" className="checkout">Оформить заказ</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Basket