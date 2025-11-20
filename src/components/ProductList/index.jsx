import React from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { addToFavourite, deleteProduct } from '../../store/slices/productSlice';
import '../../../reset.css';
import ProductCard from '../ProductCard';

function ProductList ({ products, deleteProductbyId, addToFavouriteById }) {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <ProductCard product={p} />
          <button onClick={() => deleteProductbyId(p.id)}>
            <MdDelete />
          </button>
          <button onClick={() => addToFavouriteById(p.id)}>
            Add to favourite
          </button>
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
