import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  products: [
    {
      id: uuidv4(),
      productName: 'Air Jordan 1 Mid SE',
      producent: 'Nike',
      price: '649,90',
      isFavourite: false,
      category: 'Bestseller',
      image:
        'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2dc15336-7c04-4a14-ac6a-4bab3bb5afe2/WMNS+AIR+JORDAN+1+MID+SE.png',
    },
    {
      id: uuidv4(),
      productName: 'Nike Air Max Muse',
      producent: 'Nike',
      price: '569,99',
      isFavourite: false,
      category: 'Premiere product',
      image:
        'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f20b739f-86ad-4a1a-bf4e-cf39760bad91/WMNS+NIKE+AIR+MAX+MUSE.png',
    },
    {
      id: uuidv4(),
      productName: 'Nike Air Max SNDR',
      producent: 'Nike',
      price: '499',
      isFavourite: false,
      category: '',
      image:
        'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/bc5ee450-2852-4c37-8086-300d71ee5d9d/W+NIKE+AIR+MAX+SNDR.png',
    },
  ],
};

const productSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    createProduct: (state, { payload }) => {
      state.products.push({ ...payload, isFavourite: false, id: uuidv4() });
    },
    deleteProduct: (state, { payload }) => {
      state.products = state.products.filter(c => c.id !== payload);
    },
    addToFavourite: (state, { payload }) => {
      const choosenProduct = state.products.find(p => p.id === payload);
      if (choosenProduct) {
        choosenProduct.isFavourite = !choosenProduct.isFavourite;
      }
    },
  },
});

const { reducer, actions } = productSlice;

export const { deleteProduct, createProduct, updateProduct, addToFavourite } = actions;
export default reducer;
