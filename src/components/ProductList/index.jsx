import React from 'react';
import { connect } from 'react-redux';

function ProductList ({ products }) {
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
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ productList }) => {
  return productList;
};

export default connect(mapStateToProps)(ProductList);
