import { Routes, Route } from 'react-router';
import Header from '../../components/Header';
import styles from './MainPage.module.scss';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

function MainPage () {
  return (
    <>
      <div className={styles.mainPage}>
        <Header className={styles.header} />
        <main className={styles.mainContent}>
          <Routes>
            <Route path='/' element={<div>Home Page - TODO</div>} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/admin' element={<div>Add Product Page - TODO</div>} />
            <Route path='/users' element={<div>Users Page - TODO</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
