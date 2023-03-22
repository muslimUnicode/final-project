import { FC } from "react"
import { useAppSelector } from "../../../hooks/hooks"
import { ICategory } from "../../../types/ICategory"
import "./Category.scss"
import Food from "./food/Food"

const Category: FC<{category: ICategory | null}> = ({category}) => {
    const foods = useAppSelector(state => state.foods.foods).filter(food => food.categoryId === category?._id)

    if(foods.length !== 0) {
        return(
            <div className="category">
                <div className="hr"></div>
                <h2>{category?.name}</h2>
                <div className='cards__list'>
                    {foods.map(food => <Food food={food} key={food._id}/>)}
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Category