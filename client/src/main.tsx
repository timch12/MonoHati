import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Login from './pages/Log/Login';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
