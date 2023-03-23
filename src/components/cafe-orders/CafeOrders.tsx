import "./CafeOrders.scss"

const CafeOrders = () => {
  return (
    <div className="cafe-orders">
        <div className="orders__title">
            <h2>Список заказов</h2>
            <span>(количество активных заказов: 1)</span>
        </div>
        <div className="orders__content">
            <div className="orders__number">
            <h3>Заказ №</h3>
            <h3>65e60364</h3>
            </div>
            <p>Получен в 12:35 (2 часа назад)</p>
            <p>Статус:<span>принят курьером</span></p>
            <h2 className="orders__price">777 ₽</h2>
            <button className="orders__delete">x</button>
        </div>
    </div>
  );
};

export default CafeOrders;