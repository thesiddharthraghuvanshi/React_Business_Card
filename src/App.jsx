import './App.css';

import Card from './components/card/Card';

function App() {
  return (
    <div className="container">
      <div className="dark-theme">
        <div className="cards">
          <Card theme="dark" />
        </div>
        <div className="cards">
          <Card theme="dark" />
        </div>
      </div>
      <div className="light-theme">
        <div className="cards">
          <Card theme="light" />
        </div>
        <div className="cards">
          <Card theme="light" />
        </div>
      </div>
    </div>
  );
}

export default App;
