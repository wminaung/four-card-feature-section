import React from "react";

import "../css/card.css";

const Card = ({ id, h2, p, icon }) => {
  let shadow = `card card-width card-shadow-${id}`;

  return (
    <div className={shadow}>
      <div className="card-body">
        <h2 className="very-dark-blue">{h2}</h2>
        <p className="grayish-blue very-dark-blue">{p}</p>
        <div className="icon-right">
          <img src={icon} alt="icon-supervisor" />
        </div>
      </div>
    </div>
  );
};

export default Card;
