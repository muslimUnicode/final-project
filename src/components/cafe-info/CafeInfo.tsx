import "./CafeInfo.scss"

const CafeInfo = () => {
    return (
        <div className="cafe-info">
            <div className="form__input">
            <div className="input">
                <h3>1.Название организации</h3>
                <input type="text" />
            </div>
            <div className="input">
                <h3>2.Изменить логотип</h3>
                <input type="text" />
            </div>
            <div className="input">
                <h3>3.Телефон</h3>
                <input type="text" />
            </div>
            <div className="input">
                <h3>4.Email</h3>
                <input type="text" />
            </div>
            <div className="input">
                <h3>5.Адрес организации</h3>
                <input type="text" />
            </div>
            <div className="input">
                <h3>6.Доп.информация</h3>
                <input type="text" />
            </div>
            </div>
            <button>Сохранить изменения</button>
        </div>
    );
  };
  
  export default CafeInfo;