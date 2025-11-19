import React from 'react';

function ProductPhoto ({image, productName}) {
  return (
    <div>
      <img src={image} alt={productName} width='350px' />
    </div>
  );
}

export default ProductPhoto;
