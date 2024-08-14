import Button from '../../../shared/components/button/Button';
import './CardBody.css';

export default function CardBody({ theme }) {
  return (
    <div className={`card-body card-body-${theme}`}>
      <div className="name">Siddharth</div>
      <div className="designation">Senior Software Engineer</div>
      <a className={`web-link web-link-${theme}`} href="https://thesiddharthraghuvanshi.web.app">
        thesiddharthraghuvanshi.web.app
      </a>
      <div className="buttons">
        <Button url={'../../src/assets/email.svg'} buttonText={'Email'} />
        <Button url={'../../src/assets/linkedin.svg'} buttonText={'Linkedin'} />
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          With 5 years of experience as a Full Stack Developer in the Banking,
          Finance, and HR, I excel at crafting comprehensive web solutions and
          optimizing development processes.
        </p>
      </div>
      <div className="expertise">
        <h3>Expertise</h3>
        <p>
          My technical proficiency spans both frontend and backend development:
          on the frontend, I utilize Angular, React, and TypeScript, alongside
          JavaScript, ContextAPI, Redux, RxJS and ngRx, complemented by
          Bootstrap and custom SCSS for polished, responsive designs.
        </p>
      </div>
    </div>
  );
}
