import "./Profile.scss"
import stub from '../../assets/stub.png';


const Profile = () => {

  const handleOrders = () => {

  }

  
    return (
      <div className="profile">
            <img src={stub} />
            <h2>Кофетун</h2>
            <button>Заказы</button>
            <button>Меню</button>
            <button>Информация о ресторане</button>
      </div>
    );
  };
  
  export default Profile;