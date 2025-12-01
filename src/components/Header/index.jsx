import { Link } from 'react-router';
import ProductList from '../../components/ProductList';
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <img src='logoipsum-336.svg' alt='Logo image' />
      </div>
      <nav className={styles.navigationBar}>
        <ul className={styles.navigationList}>
          <li>
            <Link to='/products' className={styles.linkElement}>
              Products
            </Link>
          </li>
          <li>
            <Link to='/admin' className={styles.linkElement}>
              Add Products
            </Link>
          </li>
          <li>
            <Link to='/users' className={styles.linkElement}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
