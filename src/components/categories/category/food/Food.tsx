import "./Food.scss"
import buy from "../../../../assets/buy.svg"
import minus from "../../../../assets/homepage-minus.svg"
import plus from "../../../../assets/homepage-plus.svg"
import { FC } from "react"
import { IFood } from "../../../../types/IFood"
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks"
import { addDishReducer, decreaseCountDishReducer, deleteDishReducer, increaseCountDishReducer } from "../../../../store/reducers/basket/basketSlice"

const Food: FC<{food: IFood}> = ({food}) => {
    const dispatch = useAppDispatch()
    const dish = useAppSelector(state => state.basket.dishes).find(dish => dish._id === food._id)

    const addDishToBasket = (food: IFood) => {
        dispatch(addDishReducer(food))
    }

    const increaseDish = (_id: string) => {
        dispatch(increaseCountDishReducer(_id))
    }

    const decreaseDish = (_id: string) => {
        if(dish?.count! > 1){
            dispatch(decreaseCountDishReducer(_id))
        } else {
            dispatch(deleteDishReducer(_id))
        }
    }

    return(
        <div className="food">
            <img src={food.image} alt="" />
                {dish?.count! > 1 && 
                <div className="count" key={dish?._id}>
                    <span>{dish?.count}</span>
                </div>}
            <div className="card__descr">
                <div className="card__title">
                    <h3>{food.name}</h3>
                    <p className="card__gram">Вес: 225 г</p>
                </div>
                <p className="card__description">{food.info}</p>
                {dish
                    ? <div className="increase-dish">
                        <button className="minus" onClick={() => decreaseDish(food._id)}><img src={minus} alt="" /></button>
                        <h3>{food.price} ₽</h3>
                        <button className="plus" onClick={() => increaseDish(food._id)}><img src={plus} alt="" /></button>
                    </div>
                    : <div className="card__price-btn">
                        <h3>{food.price} ₽</h3>
                        <button onClick={() => addDishToBasket(food)}>
                            В корзину
                            <img src={buy} alt="" />
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Food