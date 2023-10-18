import { RouterProvider } from 'react-router-dom';
import './App.css';
// import Login from './components/Login';
// import UserList from './components/UserList';
import Router from './routes/Router';

function App() {
  
  return (
    <div>
      <RouterProvider router={Router} fallbackElement={<p>Initial Load...</p>} />
    </div>
    
  );
}

export default App;
