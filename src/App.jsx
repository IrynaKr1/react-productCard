import { BrowserRouter as Router } from 'react-router';
import './App.css';
import MainPage from './pages/MainPage';

function App () {
  return (
    <>
      <Router>
        <MainPage />
      </Router>
    </>
  );
}

export default App;
