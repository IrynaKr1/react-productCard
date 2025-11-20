import { connect } from 'react-redux';
import { addToFavourite, deleteProduct } from '../../store/slices/productSlice';
import '../../../reset.css';
import ProductCard from '../ProductCard';

function ProductList ({ products, deleteProductbyId, addToFavouriteById }) {
  return (
    <ul>
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
