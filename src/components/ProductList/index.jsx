import { connect } from 'react-redux';
import { addToFavourite, deleteProduct } from '../../store/slices/productSlice';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

function ProductList ({ products, deleteProductbyId, addToFavouriteById }) {
  return (
    <section className={styles.listStyle}>
      <ul className={styles.unorderedList}>
        {products.map(p => (
          <li key={p.id}>
            <ProductCard
              product={p}
              onDelete={deleteProductbyId}
              onAddToFavourite={addToFavouriteById}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = ({ productList }) => {
  return productList;
};

const mapDispatchToProps = dispatch => ({
  deleteProductbyId: id => dispatch(deleteProduct(id)),
  addToFavouriteById: id => dispatch(addToFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
