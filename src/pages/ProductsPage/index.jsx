import React from 'react';
import ProductList from '../../components/ProductList';
import ProductForm from '../../components/ProductForm';

function ProductPage () {
  return (
    <main>
      <h2>Product List</h2>
      <ProductForm />
      <ProductList />
    </main>
  );
}

export default ProductPage;
