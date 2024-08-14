import './Button.css';

const Button = (props) => {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/siddharth-raghuvanshi/', '_blank');
  };

  return (
    <button className="button" onClick={handleClick}>
      <img src={props.url} alt="logo" />
      <span>{props.buttonText}</span>
    </button>
  );
};

export default Button;
