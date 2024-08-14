import './CardHeader.css';

export default function CardHeader({ theme }) {
  return (
    <div className={`profile-img profile-img-${theme}`}>
      <img src="../../src/assets/profile.jpg" alt="profile" height="317px" />
    </div>
  );
}
