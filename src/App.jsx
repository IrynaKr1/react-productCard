import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import MainPage from './pages/MainPage';
import ProductList from './components/ProductList';

function App () {
  return (
    <>
      <Router>
        <div className='app'>
          <MainPage />

          <main className='main-content'>
            <Routes>
              <Route path='/' element={<div>Home Page - TODO</div>} />
              <Route path='/products' element={<ProductList />} />
              <Route
                path='/admin'
                element={<div>Add Product Page - TODO</div>}
              />
              <Route path='/users' element={<div>Users Page - TODO</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
