import "./Food.scss"
import buy from "../../../../assets/buy.svg"
import minus from "../../../../assets/homepage-minus.svg"
import plus from "../../../../assets/homepage-plus.svg"
import { FC, useEffect, useState } from "react"
import { IFood } from "../../../../types/IFood"
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks"
import { addDishReducer, decreaseCountDishReducer, deleteDishReducer, increaseCountDishReducer } from "../../../../store/reducers/basket/basketSlice"

const Food: FC<{food: IFood}> = ({food}) => {
    const { dishes } = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch()
    const [added, setAdded] = useState(false)

    useEffect(() => {
        dishes.map(dish => {
            if(dish._id === food._id && dish.count >= 1) {
                setAdded(true)
            }
        })
    }, [])

    const addDishToBasket = (food: IFood) => {
        dispatch(addDishReducer(food))
        setAdded(true)
    }

    const increaseDish = (_id: string) => {
        dispatch(increaseCountDishReducer(_id))
    }

    const decreaseDish = (_id: string) => {
        dishes.map(dish => {
            if(dish._id === _id && dish.count > 1) {
                dispatch(decreaseCountDishReducer(_id))
            } else {
                dispatch(deleteDishReducer(_id))
                setAdded(false)
            }
        })
    }

    return(
        <div className="food">
            <img src={food.image} alt="" />
            <div className="card__descr">
                <div className="card__title">
                    <h3>{food.name}</h3>
                    <p className="card__gram">Вес: 225 г</p>
                </div>
                <p className="card__description">{food.info}</p>
                {added
                    ? <div className="increase-dish">
                        <div className="minus" onClick={() => decreaseDish(food._id)}><img src={minus} alt="" /></div>
                        <h3>{food.price} ₽</h3>
                        <div className="plus" onClick={() => increaseDish(food._id)}><img src={plus} alt="" /></div>
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