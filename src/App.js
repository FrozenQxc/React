import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div >
      <Header />
      <Techno />
    </div>);
}


const Techno = () => {
  return(
  <ul>
    <li>css</li>
    <li>htmk</li>
    <li>js</li>
    <li>react</li>
  </ul>
  );
}

const Header = () => {
  return (
    <div>
      <a>
        My telegramm
      </a>
    </div>
  );
}


export default App;
