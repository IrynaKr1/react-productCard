import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PRODUCT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { connect } from 'react-redux';
import { createProduct } from '../../store/slices/productSlice';
import styles from './ProductForm.module.scss';

function ProductForm ({ createNewProduct }) {
  const initialValues = {
    productName: '',
    producent: '',
    price: '',
    category: '',
    image: '',
  };

  const submitHandler = (values, { resetForm }) => {
    createNewProduct(values);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Add product to the list:</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={PRODUCT_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Product Name:
            <Field
              name='productName'
              type='text'
              autoFocus
              placeholder='Add product name'
              className={styles.input}
            />
            <ErrorMessage name='productName' component='div' />
          </label>
          <label className={styles.label}>
            Producent:
            <Field
              name='producent'
              type='text'
              placeholder='Add producent'
              className={styles.input}
            />
            <ErrorMessage
              name='producent'
              component='div'
              className={styles.error}
            />
          </label>
          <label className={styles.label}>
            Price:
            <Field
              name='price'
              type='number'
              placeholder='Add product price'
              className={styles.input}
            />
            <ErrorMessage
              name='price'
              component='div'
              className={styles.error}
            />
          </label>
          <label className={styles.label}>
            Category:
            <Field
              name='category'
              type='text'
              placeholder='Add category'
              className={styles.input}
            />
            <ErrorMessage
              name='category'
              component='div'
              className={styles.error}
            />
          </label>
          <label className={styles.label}>
            Image:
            <Field
              name='image'
              type='url'
              placeholder='Add image url'
              className={styles.input}
            />
            <ErrorMessage
              name='image'
              component='div'
              className={styles.error}
            />
          </label>
          <button type='submit' className={styles.submitButton}>
            Add product
          </button>
        </Form>
      </Formik>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewProduct: data => dispatch(createProduct(data)),
});

export default connect(null, mapDispatchToProps)(ProductForm);
