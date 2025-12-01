import React from 'react';
import styles from './Header.module.scss';

function Header () {
  return (
    <header>
      <div className={styles.imgContainer}>
        <img src='logoipsum-336.svg' alt='Logo image' />
      </div>
      <nav className={styles.navigationBar}>
        <ul>
          <li>Products</li>
          <li>Add Product</li>
          <li>Users</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
