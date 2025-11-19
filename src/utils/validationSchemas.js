import * as yup from 'yup';

export const PRODUCT_VALIDATION_SCHEMA = yup.object({
  productName: yup
    .string()
    .required('Product name is a required field')
    .min(3, 'The product name must have a minimum of 3 characters.')
    .max(100, 'The product name can be up to 100 characters long.'),
  producent: yup
    .string()
    .required('Producent is a required field')
    .min(3, 'The producent name must have a minimum of 3 characters.')
    .max(50, 'The producent name can be up to 50 characters long.'),
  price: yup
    .string()
    .required('Price is a required field')
    .matches(
      /^\d+([,.]\d{1,2})?$/,
      'The price must be a number (format: 649.90 or 649,90).'
    ),
  category: yup
    .string()
    .min(3, 'Category name must have a minimum of 3 characters.'),
  image: yup
    .string()
    .required('Image URL is required')
    .url('Add correct image URL'),
});
