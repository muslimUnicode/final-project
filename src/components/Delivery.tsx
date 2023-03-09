import React, { useState } from "react";
import "./delivery.scss";

const Delivery = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="delivery">
      <h2>Условия доставки</h2>
      <div className="accardion">
        <button onClick={() => setIsActive(!isActive)}>
          Если появились замечания <span>{isActive ? "↑" : "↓"}</span>
        </button>
        <div className="panel">
          {isActive && (
            <p>
              'Мы очень внимательно следим за качеством нашей работы, поэтому,
              если у вас будут какие-либо замечания или предложения, то
              обязательно сообщайте их нам'
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
