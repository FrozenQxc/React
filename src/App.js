import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <img src='https://spng.pngfind.com/pngs/s/685-6854970_react-logo-png-png-download-logo-png-reactjs.png'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
          <img src='https://i.pinimg.com/originals/ba/9b/34/ba9b34302728e6021136b0f7695fa8a8.jpg'></img>
        </div>
    </div>);
}

export default App;
