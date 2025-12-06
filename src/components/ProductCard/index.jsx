import ProductButtons from '../ProductButtons';
import ProductPhoto from '../ProductPhoto';
import ProductText from '../ProductText';
import styles from './ProductCard.module.scss';

function ProductCard ({ product, onDelete, onAddToFavourite }) {
  return (
    <>
      <article className={styles.productCard}>
        <ProductPhoto image={product.image} productName={product.productName} />
        <div className={styles.cardContent}>
          <ProductText
            category={product.category}
            productName={product.productName}
            producent={product.producent}
            price={product.price}
          />
        </div>
        <div className={styles.discriptionStyle}>
          <ProductButtons
            productId={product.id}
            onDelete={onDelete}
            onAddToFavourite={onAddToFavourite}
            isFavourite={product.isFavourite}
          />
        </div>
      </article>
    </>
  );
}

export default ProductCard;
