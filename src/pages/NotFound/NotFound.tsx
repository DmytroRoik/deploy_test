import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../state/actions/products';
import { allProductsSelector } from '../../state/selectors/products';
import { AppState } from '../../state/store';

export const NotFound = () => {
  const products = useSelector<AppState>(allProductsSelector);
  console.log(products);

  const dispatch = useDispatch();

  const addProductItem = () => {
    dispatch(addProduct({ id: Date.now(), name: 'blablabla' }));
  };

  return (
    <div>
      <button onClick={addProductItem}>Add Product</button>
    </div>
  );
};
