import { FC } from "react"
import { IFood } from "../../../../types/IFood"
import buy from "../../../../assets/buy.svg"
import "./Food.scss"

const Food: FC<{food: IFood}> = ({food}) => {
    return(
        <div className="food">
            <img src={food.image} alt="" />
            <div className="card__descr">
                <div className="card__title">
                    <h3>{food.name}</h3>
                    <p className="card__gram">Вес: 225 г</p>
                </div>
                <p className="card__description">{food.info}</p>
                <div className="card__price-btn">
                    <h3>{food.price} ₽</h3>
                    <button>
                        В корзину
                        <img src={buy} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Food