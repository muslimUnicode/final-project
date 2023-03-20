import { useState } from "react";
import CafeItem from "./cafe-item/CafeItem";
import { useAppSelector } from "../../hooks/hooks";
import "./TopCafes.scss"

const TopCafes = () => {
    const [cafeCount, setCafeCount] = useState(4);
    const { cafes } = useAppSelector(state => state.cafes)

    const handleClick = () => {
        setCafeCount(cafeCount + 4);
    };

    return (
        <div className="top-cafes">
            <h2>Топ заведений по отзывам</h2>
            <div className="reviews__list">
                {cafes.map(cafe => <CafeItem cafe={cafe} key={cafe._id}/>).slice(0, cafeCount)}
            </div>
            {cafeCount < cafes.length && <button onClick={() => handleClick()}>Показать больше</button>}
        </div>
    );
};

export default TopCafes;
