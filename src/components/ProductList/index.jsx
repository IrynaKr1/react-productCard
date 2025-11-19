import React from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { addToFavourite, deleteProduct } from '../../store/slices/productSlice';
import ProductPhoto from '../ProductPhoto';

function ProductList ({ products, deleteProductbyId, addToFavouriteById }) {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <ProductPhoto image={p.image} productName={p.productName} />
          <div>{p.category}</div>
          <div>{p.productName}</div>
          <div>{p.producent}</div>
          <div>{p.price} zł</div>
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
