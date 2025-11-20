import React from 'react';
import ProductPhoto from '../ProductPhoto';
import ProductText from '../ProductText';
import styles from './ProductCard.module.scss';

function ProductCard ({ product }) {
  return (
    <>
      <main className={styles.productCard}>
        <ProductPhoto image={product.image} productName={product.productName} />
        <ProductText
          category={product.category}
          productName={product.productName}
          producent={product.producent}
          price={product.price}
        />
      </main>
    </>
  );
}

export default ProductCard;
