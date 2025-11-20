import ProductList from '../../components/ProductList';
import ProductForm from '../../components/ProductForm';
import styles from './ProductPage.module.scss';

function ProductPage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Product List</h2>
        <p className={styles.pageSubtitle}>Manage your product catalog</p>
      </header>
      
      <section className={styles.formSection}>
        <ProductForm />
      </section>
      
      <section className={styles.listSection}>
        <ProductList />
      </section>
    </main>
  );
}

export default ProductPage;