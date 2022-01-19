import { useEffect, useState } from "react";
import { Profile } from "../components/Profile";
import { StatBox } from "../components/StatBox";

import "../styles/StatsContainer.css";

export const StatsContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="statsContainer">
      <Profile />
      {data.map((item) => (
        <StatBox item={item} />
      ))}
    </div>
  );
};
