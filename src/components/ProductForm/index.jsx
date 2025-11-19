import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { PRODUCT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { connect } from 'react-redux';
import { createProduct } from '../../store/slices/productSlice';

function ProductForm ({ createNewProduct }) {
  const initialValues = {
    productName: '',
    producent: '',
    price: '',
    // isFavourite: false,
    category: '',
    image: '',
  };

  const submitHandler = (values, { resetForm }) => {
    createNewProduct(values);
    resetForm();
  };

  return (
    <>
      <h3>Add product to the list:</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={PRODUCT_VALIDATION_SCHEMA}
      >
        <Form>
          <label>
            Product Name:
            <Field
              name='productName'
              type='text'
              autoFocus
              placeholder='Add product name'
            />
            <ErrorMessage name='productName' component='div' />
          </label>
          <label>
            Producent:
            <Field name='producent' type='text' placeholder='Add producent' />
            <ErrorMessage name='producent' component='div' />
          </label>
          <label>
            Price:
            <Field name='price' type='number' placeholder='Add product price' />
            <ErrorMessage name='price' component='div' />
          </label>
          <label>
            Category:
            <Field name='category' type='text' placeholder='Add category' />
            <ErrorMessage name='category' component='div' />
          </label>
          <label>
            Image:
            <Field name='image' type='url' placeholder='Add image url' />
            <ErrorMessage name='image' component='div' />
          </label>
          <button type='submit'>Add product</button>
        </Form>
      </Formik>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewProduct: data => dispatch(createProduct(data)),
});

export default connect(null, mapDispatchToProps)(ProductForm);
