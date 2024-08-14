import Logo from '../../../shared/components/logo/Logo';
import './CardFooter.css';

export default function CardFooter() {
  return (
    <div className="links">
      <Logo url={'../../src/assets/twitter.svg'} />
      <Logo url={'../../src/assets/facebook.svg'} />
      <Logo url={'../../src/assets/instagram.svg'} />
      <Logo url={'../../src/assets/github.svg'} />
    </div>
  );
}
