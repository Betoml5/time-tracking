import "../styles/Profile.css";

export const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileContainer__information">
        <img src="/images/image-jeremy.png" alt="avatar" />
        <div>
          <p>Report for</p>
          <p>Jeremy Robson</p>
        </div>
      </div>
      <div className="profileContainer__date">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};
