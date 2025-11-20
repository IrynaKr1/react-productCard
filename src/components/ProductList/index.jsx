import React from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { addToFavourite, deleteProduct } from '../../store/slices/productSlice';
import ProductPhoto from '../ProductPhoto';
import ProductText from '../ProductText';
import '../../../reset.css';

function ProductList ({ products, deleteProductbyId, addToFavouriteById }) {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <ProductPhoto image={p.image} productName={p.productName} />
          <ProductText
            category={p.category}
            productName={p.productName}
            producent={p.producent}
            price={p.price}
          />
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
