import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import UserList from './components/UserList';

function App() {
  const token = 'YOUR_TOKEN'; // Thay đổi thành mã token từ localStorage hoặc Redux store
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
      {token ? <UserList token={token} /> : <Login />}
    </div>
      </header>
    </div>
  );
}

export default App;
