import React from 'react';
import styles from './ProductPhoto.module.scss';

function ProductPhoto ({ image, productName }) {
  return (
    <div className={styles.imgContainer}>
      <img src={image} alt={productName} className={styles.img} />
    </div>
  );
}

export default ProductPhoto;
