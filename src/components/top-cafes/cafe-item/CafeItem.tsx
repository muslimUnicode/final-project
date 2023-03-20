import { FC } from "react";
import { ICafe } from "../../../types/ICafe";
import "./CafeItem.scss"

const CafeItem: FC<{cafe: ICafe}> = ({cafe}) => {
    return (
        <div className='cafe__item'>
            <img src={cafe.image} alt="" />
        </div>
    );
};


export default CafeItem;