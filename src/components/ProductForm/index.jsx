import { Formik } from 'formik';
import React from 'react';
import { PRODUCT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';

function ProductForm () {
  const initialValues = {
    productName: '',
    producent: '',
    price: '',
    // isFavourite: false,
    category: '',
    image: '',
  };

  const submitHandler = (values, { resetForm }) => {
    console.log('values', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={PRODUCT_VALIDATION_SCHEMA}
    ></Formik>
  );
}

export default ProductForm;
