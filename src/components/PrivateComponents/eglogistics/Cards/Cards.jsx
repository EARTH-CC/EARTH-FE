import React from "react";
import "./Cards.css";
import { cardsData } from "../../../../data/Data";

import Card from "../Card/Card";

export default function Cards() {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
}
