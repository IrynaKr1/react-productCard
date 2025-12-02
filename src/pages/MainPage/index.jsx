import { Routes, Route } from 'react-router';
import styles from './MainPage.module.scss';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import ProductForm from '../../components/ProductForm';
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
            <Route path='/admin' element={<ProductForm />} />
            <Route path='/users' element={<div>Users Page - TODO</div>} />
          </Routes>
        </main>
        <Footer className={styles.footer}/>
      </div>
    </>
  );
}

export default MainPage;
