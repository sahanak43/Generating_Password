import logo from './logo.svg';
//import './App.css';
import GeneratedPassword from './Components/GeneratedPassword';
import PasswordGenerator from './Components/PasswordGenerator';
import './index.scss';

function App() {
  return (
    <div className='page-container'>
      <div id='page-title'>
        <span>Password Generator</span>
        {/* <h3>APP HELLO</h3> */}
      </div>
      <main className='main-container'>
        <GeneratedPassword />
        <PasswordGenerator />
      </main>
    </div>
  );
}

export default App;
