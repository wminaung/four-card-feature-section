import React from "react";
import Card from "./Card";
import "../css/cards.css";

function Cards({ data }) {
  return (
    <div className="cards" style={{ padding: 25 }}>
      {data.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          h2={data.h2}
          p={data.p}
          icon={data.icon}
        />
      ))}
    </div>
  );
}

export default Cards;
