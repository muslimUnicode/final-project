import "./Header.scss";
import location from '../../assets/location.svg';
import search from '../../assets/search.svg';
import calling from '../../assets/calling.svg';
import profile from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

  return (
    <div className="header">
        <header>
            <div className="burger__menu">
                <div className="burger">
                    <span></span>
                </div>
                <h3>Меню</h3>
            </div>
            <h2 className="logo" onClick={() => navigate("/")}>Logos</h2>
            <label className="form__input" htmlFor='search' onClick={() => navigate("")}>
                <img className="input__location" src={location} alt="" />
                <input className="input__search" type="search" placeholder="Введите адрес доставки" id='search' />
                <img className="button__search" src={search} alt="" />
            </label>
            <div className="telephone">
                <div className="call">
                    <img src={calling} alt="" />
                </div>
                <p>Контакты:<br />
                    <span>+7 (917) 510-57-59</span>
                </p>
            </div>
            <div className="profile" onClick={() => navigate("/sign-in")}>
                <img src={profile} alt="" />
                <button>Войти</button>
            </div>
            <button className="basket" onClick={() => navigate("/basket")}>
                Корзина<span className="vert__line"></span><span className="quantity">4</span>
            </button>
        </header>
    </div>
  );
};

export default Header;