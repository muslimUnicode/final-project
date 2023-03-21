import "./Profile.scss"
import stub from '../../assets/stub.png';


const Profile = ({setContent}) => {
  
    return (
      <div className="profile">
            <img src={stub} />
            <h2>Кофетун</h2>
            <button onClick={() => setContent(0)}>Заказы</button>
            <button onClick={() => setContent(1)}>Меню</button>
            <button onClick={() => setContent(2)}>Информация о ресторане</button>
      </div>
    );
  };
  
  export default Profile;