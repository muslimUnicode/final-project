import { useState } from "react"
import { useAppSelector } from "../../hooks/hooks"
import "./Categories.scss"
import Category from "./category/Category"

const Categories = () => {
    const { categories } = useAppSelector(state => state.categories)
    const [categoryCount, setCategoryCount] = useState(4)

    const loadMore = () => {
        setCategoryCount(categoryCount + 4)
    }

    return(
        <div className="categories">
            {categories.map(category => <Category category={category} key={category._id}/>).slice(0, categoryCount)}
            {categoryCount < categories.length && <div className="load-more" onClick={() => loadMore()}>Показать больше категорий</div>}
        </div>
    )
}

export default Categories