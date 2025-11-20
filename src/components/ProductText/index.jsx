import styles from './ProductText.module.scss';
import '../../../reset.css';

function ProductText ({ category, productName, producent, price }) {
  return (
    <div className={styles.textContainer}>
      {category ? <p className={styles.categoryText}>{category}</p> : null}
      <p className={styles.cardText}>{productName}</p>
      <p className={styles.cardText}>{producent}</p>
      <p className={styles.cardText}>{price} zł</p>
    </div>
  );
}

export default ProductText;
