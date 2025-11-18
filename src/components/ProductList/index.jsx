import React from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import {
  addToFavourite,
  deleteProduct,
  updateProduct,
} from '../../store/slices/productSlice';

function ProductList ({
  products,
  deleteProductbyId,
  updateProductbyId,
  addToFavouriteById,
}) {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <div>
            <img src={p.image} alt='Product image' width='350px' />
          </div>
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
  updateProductbyId: (id, data) => dispatch(updateProduct({ id, data })),
  addToFavouriteById: id => dispatch(addToFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
