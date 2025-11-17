import React from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { deleteProduct } from '../../store/slices/productSlice';

function ProductList ({ products, deleteProductbyId }) {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
