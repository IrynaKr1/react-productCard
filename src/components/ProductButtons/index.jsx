import {
  MdDelete,
  MdOutlineStarBorder,
  MdOutlineStarPurple500,
} from 'react-icons/md';
import styles from './ProductButtons.module.scss';

function ProductButtons ({
  productId,
  onDelete,
  onAddToFavourite,
  isFavourite,
}) {
  return (
    <div>
      <button onClick={() => onDelete(productId)} className={styles.deleteButton}>
        <MdDelete />
      </button>
      <button
        onClick={() => onAddToFavourite(productId)}
        className={isFavourite ? styles.favouriteActive : styles.favourite}
      >
        {isFavourite ? <MdOutlineStarPurple500 /> : <MdOutlineStarBorder />}
      </button>
    </div>
  );
}

export default ProductButtons;
