import './Logo.css';

const Logo = (props) => {
  return <img className="logo-img" src={props.url} alt="logo" width="25px" />;
};

export default Logo;
