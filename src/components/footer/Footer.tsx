import "./Footer.scss";
import footerArrow from "../../assets/icon/footerArrow.svg";
import logo from "../../assets/icon/logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  
  return (
    <div className="footer">
        <div className="footer__arrow">
            <img src={footerArrow} alt="" />
        </div>
        <div className="footer__config">
            <img src={logo} alt="" />
            <p>© ООО СК «АПШЕРОН»<br /> Все права защищены. 2010-2020</p>
            <a href="">Пользовательское соглашение</a>
            <a href="">Карта сайта</a>
            <a href="">Политика конфиденциальности</a>
        </div>
        <ul>
            <li>О ресторане</li>
            <li onClick={() => navigate("/delivery")}>Условия доставки</li>
            <li>Возврат товара</li>
            <li>Акции</li>
        </ul>
    </div>
  );
};

export default Footer;
