import { useEffect, useState } from "react";
// import ElipsisImage from "/images/icon-ellipsis.svg";
import "../styles/StatBox.css";

export const StatBox = ({ item }) => {
  console.log(item);
  return (
    <div className="statBoxContainer">
      <div
        className="statBoxContainer__header"
        style={{ backgroundColor: item.color }}
      >
        <img src={item.image} alt="work" />
      </div>
      <div className="statBoxContainer__information">
        <div className="statBoxContainer__information-itemTitle">
          <p>{item.title}</p>
          <img src="/images/icon-ellipsis.svg" alt="elipsis" />
        </div>
        <div className="statBoxContainer__information-itemTime">
          <p>{item.timeframes.weekly.current}hrs</p>
          <p>Last week - {item.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    </div>
  );
};
