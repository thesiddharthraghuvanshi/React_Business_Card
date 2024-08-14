import './Card.css';
import CardHeader from './card-header/CardHeader';
import CardBody from './card-body/CardBody';
import CardFooter from './card-footer/CardFooter';

export default function Card({ theme }) {
  return (
    <div className="card">
      <CardHeader theme={theme} />
      <CardBody theme={theme} />
      <CardFooter />
    </div>
  );
}
